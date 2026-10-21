import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Send } from "lucide-react";

import AuthLayout from "../../components/Layouts/AuthLayout";
import AuthInput from "../../components/common/Auth/AuthInput";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setMessage(
      "Your email is valid. Connect this form to your backend password-reset endpoint to send a recovery email.",
    );
  }

  return (
    <AuthLayout mode="recovery">
      <div>
        <Link
          to="/login"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to login
        </Link>

        <p className="text-sm font-semibold text-blue-600">Account recovery</p>

        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          Forgot your password?
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          Enter the email address associated with your account to start the
          password recovery process.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <AuthInput
          id="email"
          name="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
            setMessage("");
          }}
          icon={Mail}
          autoComplete="email"
          error={error}
          required
        />

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
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          <Send size={17} />
          Continue
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-slate-600">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-bold text-blue-600 hover:text-blue-800"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
