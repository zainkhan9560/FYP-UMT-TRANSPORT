import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout.jsx";
import AuthInput from "../../components/auth/AuthInput.jsx";
import { MIN_PASSWORD_LENGTH } from "../../utils/constants.js";

import {
  signupUser,
  clearAuthError,
  resetSignupSuccess,
} from "../../redux/slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const INITIAL_FORM = {
  name: "",
  identifier: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function validate(form) {
  if (form.password.length < MIN_PASSWORD_LENGTH) {
    return `Password must contain at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  if (form.password !== form.confirmPassword) {
    return "Your passwords do not match.";
  }
  return "";
}

export default function Signup() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { loading, error, signupSuccess } = useSelector((state) => state.auth);

  function updateField(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
    dispatch(clearAuthError());
    dispatch(resetSignupSuccess());
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    const validationError = validate(form);

    if (validationError) {
      setMessage(validationError);
      return;
    }

    try {
      const result = await dispatch(
        signupUser({
          name: form.name.trim(),
          email: form.email.trim(),
          password: form.password,
          confirmPassword: form.confirmPassword,
        }),
      ).unwrap();

      setMessage(result.message || "Account created successfully.");

      setForm(INITIAL_FORM);
    } catch (errorMessage) {
      console.error("Signup failed:", errorMessage);
    }
  }

  return (
    <AuthLayout mode="signup">
      <div className="mb-4 text-center">
        <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Create student account
        </h2>

        <p className="text-sm leading-relaxed text-slate-500">
          Drivers are registered by the transport office.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AuthInput
            id="signup-name"
            label="Full name"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={updateField}
            autoComplete="name"
            required
          />

          <AuthInput
            id="signup-identifier"
            label="Student ID"
            name="identifier"
            placeholder="Student ID"
            value={form.identifier}
            onChange={updateField}
            required
          />
        </div>

        <AuthInput
          id="signup-email"
          label="Email address"
          name="email"
          type="email"
          placeholder="name@umt.edu.pk"
          value={form.email}
          onChange={updateField}
          autoComplete="email"
          required
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AuthInput
            id="signup-password"
            label="Password"
            name="password"
            type="password"
            placeholder={`Min. ${MIN_PASSWORD_LENGTH} characters`}
            value={form.password}
            onChange={updateField}
            autoComplete="new-password"
            minLength={MIN_PASSWORD_LENGTH}
            required
          />

          <AuthInput
            id="signup-confirm-password"
            label="Confirm password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            value={form.confirmPassword}
            onChange={updateField}
            autoComplete="new-password"
            minLength={MIN_PASSWORD_LENGTH}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00307f] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#00235c] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          {loading ? "Creating account..." : "Create account"}

          {!loading && <ArrowRight size={18} />}
        </button>

        {(message || error || signupSuccess) && (
          <p
            className="mt-3 break-words rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm leading-relaxed text-[#00307f]"
            role={error ? "alert" : "status"}
          >
            {message ||
              (typeof error === "string" ? error : "") ||
              "Account created successfully."}
          </p>
        )}
      </form>

      <p className="mt-5 text-center text-sm leading-relaxed text-slate-500">
        Have an account?{" "}
        <Link
          to="/login"
          className="font-bold text-[#0a3d9c] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
