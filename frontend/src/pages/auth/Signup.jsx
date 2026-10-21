import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import AuthLayout from '../../components/auth/AuthLayout.jsx'
import AuthInput from '../../components/auth/AuthInput.jsx'
import { MIN_PASSWORD_LENGTH } from '../../utils/constants.js'

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
  const [form, setForm] = useState(INITIAL_FORM)
  const [message, setMessage] = useState('')

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

    // Backend integration point: POST { role: 'student', ...form } (omit confirmPassword).
    // The server must independently reject privileged roles and re-validate all input.
    setMessage('Form validated. Connect the backend to create your account.')
  }

  return (
    <AuthLayout mode="signup">
      <div className="form-heading">
        <h2>Create student account</h2>
        <p>Drivers are registered by the transport office.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field-row">
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

        <div className="field-row">
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
            label="Confirm"
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
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </AuthLayout>
  )
}