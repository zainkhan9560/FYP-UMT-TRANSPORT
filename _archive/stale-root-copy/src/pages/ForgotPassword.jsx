import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, KeyRound, Mail } from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout.jsx'
import AuthInput from '../components/auth/AuthInput.jsx'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // Backend integration point: POST { email: email.trim() }.
    // Always show the same response so the form cannot be used to discover registered emails.
    setMessage(
      'If an account exists for this email, reset instructions will be sent. Connect the backend to enable this.',
    )
  }

  return (
    <AuthLayout mode="recovery">
      <Link to="/login" className="back-link">
        <ArrowLeft size={16} /> Back to sign in
      </Link>

      <div className="recovery-icon" aria-hidden="true">
        <KeyRound size={26} />
      </div>

      <div className="form-heading">
        <span className="form-kicker">ACCOUNT RECOVERY</span>
        <h2>Forgot your password?</h2>
        <p>Enter your email and we will send you instructions to reset it.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <AuthInput
          id="recovery-email"
          label="Email address"
          name="email"
          type="email"
          placeholder="name@umt.edu.pk"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            setMessage('')
          }}
          autoComplete="email"
          icon={Mail}
          required
        />

        <button className="submit-button recovery-submit" type="submit">
          Send reset link <ArrowRight size={18} />
        </button>

        {message && (
          <p className="form-message" role="status">
            {message}
          </p>
        )}
      </form>

      <p className="signup-prompt">
        Remembered it? <Link to="/login">Sign in</Link>
      </p>
    </AuthLayout>
  )
}
