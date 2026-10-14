import { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react'
=======
import { ArrowRight, Lock, User } from 'lucide-react'
>>>>>>> 489011d (landing page added to the project)

import AuthLayout from '../components/auth/AuthLayout.jsx'
import AuthInput from '../components/auth/AuthInput.jsx'
import RoleSelector from '../components/auth/RoleSelector.jsx'
import { ROLES } from '../utils/constants.js'

<<<<<<< HEAD
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

=======
>>>>>>> 489011d (landing page added to the project)
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
<<<<<<< HEAD
        <span className="form-kicker">UNIVERSITY OF MANAGEMENT AND TECHNOLOGY</span>
        <h2>Log in to UMT Transit</h2>
        <p>Sign in to track your campus bus and plan your arrival.</p>
=======
        <h2>Log in</h2>
        <p>Sign in to track your campus bus.</p>
>>>>>>> 489011d (landing page added to the project)
      </div>

      <form onSubmit={handleSubmit}>
        <RoleSelector value={role} onChange={setRole} />

        <AuthInput
          id="login-identifier"
<<<<<<< HEAD
          label="Username, university email or ID"
          name="identifier"
          placeholder="Enter your email or university ID"
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
          autoComplete="username"
=======
          label="Email or university ID"
          icon={User}
          name="identifier"
          placeholder="Email or university ID"
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
          autoComplete="username"
          autoFocus
>>>>>>> 489011d (landing page added to the project)
          required
        />

        <AuthInput
          id="login-password"
          label="Password"
<<<<<<< HEAD
          labelAction={
            <Link className="text-link" to="/forgot-password">
              Forgot password?
            </Link>
          }
          name="password"
          type="password"
          placeholder="Enter your password"
=======
          icon={Lock}
          name="password"
          type="password"
          placeholder="Password"
>>>>>>> 489011d (landing page added to the project)
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
<<<<<<< HEAD
          <span className="role-hint">{capitalize(role)} account</span>
=======
          <Link className="text-link" to="/forgot-password">
            Forgot password?
          </Link>
>>>>>>> 489011d (landing page added to the project)
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

<<<<<<< HEAD
      <div className="first-time">
        <h3>Is this your first time here?</h3>
        <p>Create your UMT Transit account with your student or driver ID to start tracking buses.</p>
        <Link to="/signup">Create new account</Link>
      </div>

      <p className="help-note">
        Trouble logging in? Contact the UMT IT help desk at{' '}
        <a href="mailto:ithelpdesk@umt.edu.pk">ithelpdesk@umt.edu.pk</a>
=======
      <p className="signup-prompt">
        New here? <Link to="/signup">Create an account</Link>
>>>>>>> 489011d (landing page added to the project)
      </p>
    </AuthLayout>
  )
}
