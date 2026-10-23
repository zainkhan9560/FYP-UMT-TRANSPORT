import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout.jsx";
import AuthInput from "../../components/auth/AuthInput.jsx";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearAuthError } from "../../redux/slices/authSlice.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  async function handleSubmit(event) {
    event.preventDefault();

    dispatch(clearAuthError());

    try {
      const user = await dispatch(
        loginUser({
          email: email.trim(),
          password,
        }),
      ).unwrap();

      console.log("Login successful:", user);

      // Redirect after login when your routes are ready.
      // Example: navigate("/");
    } catch (errorMessage) {
      console.error("Login failed:", errorMessage);
    }
  }

  return (
    <AuthLayout mode="login">
      <div className="form-heading">
        <h2>Log in</h2>
        <p>Access your UMTGo account.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <AuthInput
          id="login-email"
          label="Email address"
          name="email"
          type="email"
          placeholder="name@umt.edu.pk"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            dispatch(clearAuthError());
          }}
          autoComplete="username"
          required
        />

        <AuthInput
          id="login-password"
          label="Password"
          labelAction={
            <Link className="text-link" to="/forgot-password">
              Forgot password?
            </Link>
          }
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />

        <div className="remember-row">
          <label className="remember-label">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            <span>Remember me</span>
          </label>
        </div>

        <button className="submit-button" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
          {!loading && <ArrowRight size={18} />}
        </button>

        {error && (
          <p className="form-message" role="alert">
            {typeof error === "string"
              ? error
              : "Login failed. Please try again."}
          </p>
        )}
      </form>

      <p className="signup-prompt">
        New here? <Link to="/signup">Create an account</Link>
      </p>
    </AuthLayout>
  );
}
