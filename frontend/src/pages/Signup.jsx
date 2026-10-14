import { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { ArrowLeft, ArrowRight } from 'lucide-react'
=======
import { ArrowRight, IdCard, Lock, Mail, User } from 'lucide-react'
>>>>>>> 489011d (landing page added to the project)

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
<<<<<<< HEAD
  if (form.password.length < MIN_PASSWORD_LENGTH) {
    return `Password must contain at least ${MIN_PASSWORD_LENGTH} characters.`
  }
  if (form.password !== form.confirmPassword) {
    return 'Your passwords do not match.'
  }
  return ''
=======
  const errors = {}
  if (form.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Min. ${MIN_PASSWORD_LENGTH} characters`
  }
  if (form.confirmPassword && form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Does not match'
  }
  return errors
>>>>>>> 489011d (landing page added to the project)
}

export default function Signup() {
  const [role, setRole] = useState(ROLES.STUDENT)
  const [form, setForm] = useState(INITIAL_FORM)
  const [message, setMessage] = useState('')
<<<<<<< HEAD
=======
  const [errors, setErrors] = useState({})
>>>>>>> 489011d (landing page added to the project)

  const isStudent = role === ROLES.STUDENT

  function updateField(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
<<<<<<< HEAD
=======
    setErrors((previous) => ({ ...previous, [name]: undefined, ...(name === 'password' ? { confirmPassword: undefined } : {}) }))
>>>>>>> 489011d (landing page added to the project)
    setMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()

<<<<<<< HEAD
    const validationError = validate(form)
    if (validationError) {
      setMessage(validationError)
=======
    const validationErrors = validate(form)
    if (form.password !== form.confirmPassword) {
      validationErrors.confirmPassword = 'Does not match'
    }
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setMessage('')
>>>>>>> 489011d (landing page added to the project)
      return
    }

    // Backend integration point: POST { role, ...form } (omit confirmPassword).
    // The server must independently reject privileged roles and re-validate all input.
    setMessage('Form validated. Connect the backend to create your account.')
  }

  return (
    <AuthLayout mode="signup">
<<<<<<< HEAD
      <Link to="/login" className="back-link">
        <ArrowLeft size={16} /> Back to sign in
      </Link>

      <div className="form-heading">
        <span className="form-kicker">UMT TRANSIT · NEW ACCOUNT</span>
        <h2>Create your account</h2>
        <p>Enter your details to get started.</p>
      </div>

      <form onSubmit={handleSubmit}>
=======
      <div className="form-heading">
        <h2>Create account</h2>
        <p>Join UMTGo as a student or driver.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
>>>>>>> 489011d (landing page added to the project)
        <RoleSelector
          value={role}
          allowedRoles={SIGNUP_ROLES}
          onChange={(nextRole) => {
            setRole(nextRole)
            setMessage('')
          }}
        />

<<<<<<< HEAD
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
=======
        <div className="field-row">
          <AuthInput
            id="signup-name"
            label="Full name"
            icon={User}
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={updateField}
            autoComplete="name"
            required
          />

          <AuthInput
            id="signup-identifier"
            label={isStudent ? 'Student ID' : 'Driver ID'}
            icon={IdCard}
            name="identifier"
            placeholder={isStudent ? 'Student ID' : 'Driver ID'}
            value={form.identifier}
            onChange={updateField}
            required
          />
        </div>
>>>>>>> 489011d (landing page added to the project)

        <AuthInput
          id="signup-email"
          label="Email address"
<<<<<<< HEAD
=======
          icon={Mail}
>>>>>>> 489011d (landing page added to the project)
          name="email"
          type="email"
          placeholder="name@umt.edu.pk"
          value={form.email}
          onChange={updateField}
          autoComplete="email"
          required
        />

<<<<<<< HEAD
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
=======
        <div className="field-row">
          <AuthInput
            id="signup-password"
            label="Password"
            icon={Lock}
            error={errors.password}
            name="password"
            type="password"
            placeholder={`Min. ${MIN_PASSWORD_LENGTH} chars`}
            value={form.password}
            onChange={updateField}
            autoComplete="new-password"
            minLength={MIN_PASSWORD_LENGTH}
            required
          />

          <AuthInput
            id="signup-confirm-password"
            label="Confirm password"
            icon={Lock}
            error={errors.confirmPassword}
            name="confirmPassword"
            type="password"
            placeholder="Re-enter"
            value={form.confirmPassword}
            onChange={updateField}
            autoComplete="new-password"
            minLength={MIN_PASSWORD_LENGTH}
            required
          />
        </div>

        <button className="submit-button" type="submit">
>>>>>>> 489011d (landing page added to the project)
          Create account <ArrowRight size={18} />
        </button>

        {message && (
          <p className="form-message" role="status">
            {message}
          </p>
        )}
      </form>

      <p className="signup-prompt">
<<<<<<< HEAD
        Already registered? <Link to="/login">Sign in</Link>
=======
        Have an account? <Link to="/login">Log in</Link>
>>>>>>> 489011d (landing page added to the project)
      </p>
    </AuthLayout>
  )
}
