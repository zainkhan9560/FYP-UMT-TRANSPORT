import { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react'
=======
<<<<<<< HEAD
import { ArrowLeft, ArrowRight, KeyRound, Mail } from 'lucide-react'
=======
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react'
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain

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
<<<<<<< HEAD
      'If an account exists for this email, a reset link will be sent.',
=======
<<<<<<< HEAD
      'If an account exists for this email, reset instructions will be sent. Connect the backend to enable this.',
=======
      'If an account exists for this email, a reset link will be sent.',
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
    )
  }

  return (
    <AuthLayout mode="recovery">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/dev/zain
      <Link to="/login" className="back-link">
        <ArrowLeft size={16} /> Back to sign in
      </Link>

<<<<<<< HEAD
      <div className="form-heading">
        <h2>Reset password</h2>
        <p>Enter your email and we will send a reset link.</p>
=======
      <div className="recovery-icon" aria-hidden="true">
        <KeyRound size={26} />
      </div>

      <div className="form-heading">
        <span className="form-kicker">ACCOUNT RECOVERY</span>
        <h2>Forgot your password?</h2>
        <p>Enter your email and we will send you instructions to reset it.</p>
=======
      <div className="form-heading">
        <h2>Reset password</h2>
        <p>Enter your email and we will send you a reset link.</p>
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          autoFocus
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
          icon={Mail}
          required
        />

<<<<<<< HEAD
        <button className="submit-button recovery-submit" type="submit">
=======
<<<<<<< HEAD
        <button className="submit-button recovery-submit" type="submit">
=======
        <button className="submit-button" type="submit">
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
          Send reset link <ArrowRight size={18} />
        </button>

        {message && (
          <p className="form-message" role="status">
            {message}
          </p>
        )}
      </form>
<<<<<<< HEAD
=======

      <p className="signup-prompt">
<<<<<<< HEAD
        Remembered it? <Link to="/login">Sign in</Link>
=======
        <Link to="/login" className="back-link">
          <ArrowLeft size={15} /> Back to log in
        </Link>
>>>>>>> 489011d (landing page added to the project)
      </p>
>>>>>>> origin/dev/zain
    </AuthLayout>
  )
}
