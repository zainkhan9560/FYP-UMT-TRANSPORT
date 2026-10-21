import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout.jsx'
import AuthInput from '../components/auth/AuthInput.jsx'
import RoleSelector from '../components/auth/RoleSelector.jsx'
import { MIN_PASSWORD_LENGTH, ROLES, SIGNUP_ROLES } from '../utils/constants.js'

const INITIAL_FORM = {
  name: '',
  identifier: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function validate(form) {
  if (form.password.length < MIN_PASSWORD_LENGTH) {
    return `Password must contain at least ${MIN_PASSWORD_LENGTH} characters.`
  }
  if (form.password !== form.confirmPassword) {
    return 'Your passwords do not match.'
  }
  return ''
}

export default function Signup() {
  const [role, setRole] = useState(ROLES.STUDENT)
  const [form, setForm] = useState(INITIAL_FORM)
  const [message, setMessage] = useState('')

  const isStudent = role === ROLES.STUDENT

  function updateField(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const validationError = validate(form)
    if (validationError) {
      setMessage(validationError)
      return
    }

    // Backend integration point: POST { role, ...form } (omit confirmPassword).
    // The server must independently reject privileged roles and re-validate all input.
    setMessage('Form validated. Connect the backend to create your account.')
  }

  return (
    <AuthLayout mode="signup">
      <Link to="/login" className="back-link">
        <ArrowLeft size={16} /> Back to sign in
      </Link>

      <div className="form-heading">
        <span className="form-kicker">UMT TRANSIT · NEW ACCOUNT</span>
        <h2>Create your account</h2>
        <p>Enter your details to get started.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <RoleSelector
          value={role}
          allowedRoles={SIGNUP_ROLES}
          onChange={(nextRole) => {
            setRole(nextRole)
            setMessage('')
          }}
        />

        <AuthInput
          id="signup-name"
          label="Full name"
          name="name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={updateField}
          autoComplete="name"
          required
        />

        <AuthInput
          id="signup-identifier"
          label={isStudent ? 'Student ID' : 'Driver ID'}
          name="identifier"
          placeholder={
            isStudent
              ? 'Enter your university student ID'
              : 'Enter your assigned driver ID'
          }
          value={form.identifier}
          onChange={updateField}
          required
        />

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

        <AuthInput
          id="signup-password"
          label="Password"
          name="password"
          type="password"
          placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
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
          placeholder="Re-enter your password"
          value={form.confirmPassword}
          onChange={updateField}
          autoComplete="new-password"
          minLength={MIN_PASSWORD_LENGTH}
          required
        />

        <button className="submit-button signup-submit" type="submit">
          Create account <ArrowRight size={18} />
        </button>

        {message && (
          <p className="form-message" role="status">
            {message}
          </p>
        )}
      </form>

      <p className="signup-prompt">
        Already registered? <Link to="/login">Sign in</Link>
      </p>
    </AuthLayout>
  )
}
