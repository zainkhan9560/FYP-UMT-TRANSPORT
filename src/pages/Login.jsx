import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout.jsx'
import AuthInput from '../components/auth/AuthInput.jsx'
import RoleSelector from '../components/auth/RoleSelector.jsx'
import { ROLES } from '../utils/constants.js'

export default function Login() {
  const [role, setRole] = useState(ROLES.STUDENT)
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // Backend integration point: send { role, identifier: identifier.trim(), password, remember }.
    setMessage('Login UI is ready. Connect your backend to authenticate.')
  }

  return (
    <AuthLayout mode="login">
      <div className="form-heading">
        <h2>Log in</h2>
        <p>Access your UMTGo account.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <RoleSelector value={role} onChange={setRole} />

        <AuthInput
          id="login-identifier"
          label="Email or university ID"
          name="identifier"
          placeholder="Email or university ID"
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
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

        <button className="submit-button" type="submit">
          Log in <ArrowRight size={18} />
        </button>

        {message && (
          <p className="form-message" role="status">
            {message}
          </p>
        )}
      </form>

      <p className="signup-prompt">
        New here? <Link to="/signup">Create an account</Link>
      </p>
    </AuthLayout>
  )
}
