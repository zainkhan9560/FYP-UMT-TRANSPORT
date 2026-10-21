import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

import AuthLayout from "../../components/Layouts/AuthLayout";
import AuthInput from "../../components/common/Auth/AuthInput";
import RoleSelector from "../../components/common/Auth/RoleSelector";
import { LOGIN_ROLES, ROLES } from "../../utils/constants";

export default function Login() {
  const [form, setForm] = useState({
    identifier: "",
    password: "",
    role: ROLES.STUDENT,
    remember: true,
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Frontend demo only. Connect the login form to your backend API to authenticate users.",
    );
  }

  return (
    <AuthLayout mode="login">
      <div>
        <p className="text-sm font-semibold text-blue-600">Welcome back</p>

        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          Sign in to UMTGo
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Access your transport dashboard and journey information.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <RoleSelector
          value={form.role}
          onChange={(role) => {
            setForm((previous) => ({ ...previous, role }));
            setMessage("");
          }}
          allowedRoles={LOGIN_ROLES}
        />

        <AuthInput
          id="identifier"
          name="identifier"
          label="Email or university ID"
          type="text"
          placeholder="Enter your email or university ID"
          value={form.identifier}
          onChange={handleChange}
          icon={Mail}
          autoComplete="username"
          required
        />

        <AuthInput
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          icon={LockKeyhole}
          autoComplete="current-password"
          required
        />

        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 accent-blue-600"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Forgot password?
          </Link>
        </div>

        {message && (
          <p
            role="status"
            className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-800"
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Sign in
          <ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-bold text-blue-600 hover:text-blue-800"
        >
          Create one
        </Link>
      </p>
    </AuthLayout>
  );
}
