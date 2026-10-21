import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  UserRound,
} from 'lucide-react'

import AuthLayout from "../../components/Layouts/AuthLayout";
import AuthInput from "../../components/common/Auth/AuthInput";
import RoleSelector from "../../components/common/Auth/RoleSelector";
import { ROLES, SIGNUP_ROLES } from '../../utils/constants'

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    universityId: '',
    password: '',
    confirmPassword: '',
    role: ROLES.STUDENT,
    agree: false,
  })

  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  function handleChange(event) {
    const { name, value, type, checked } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setErrors((previous) => ({ ...previous, [name]: '' }))
    setMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = {}

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Enter your full name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (form.password.length < 8) {
      nextErrors.password = 'Password must contain at least 8 characters.'
    }

    if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match.'
    }

    if (!form.agree) {
      nextErrors.agree = 'Please accept the terms to continue.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setMessage(
      'Your form is valid. Connect this form to your backend API to create an account.',
    )
  }

  return (
    <AuthLayout mode="signup">
      <div>
        <p className="text-sm font-semibold text-blue-600">
          Get started with UMTGo
        </p>

        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          Create your account
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Enter your details to get started with campus transport.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <RoleSelector
          value={form.role}
          onChange={(role) =>
            setForm((previous) => ({ ...previous, role }))
          }
          allowedRoles={SIGNUP_ROLES}
        />

        <AuthInput
          id="name"
          name="name"
          label="Full name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          icon={UserRound}
          autoComplete="name"
          error={errors.name}
          required
        />

        <AuthInput
          id="email"
          name="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          icon={Mail}
          autoComplete="email"
          error={errors.email}
          required
        />

        <AuthInput
          id="universityId"
          name="universityId"
          label="University ID (optional)"
          placeholder="Enter your university ID"
          value={form.universityId}
          onChange={handleChange}
          autoComplete="off"
        />

        <AuthInput
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={form.password}
          onChange={handleChange}
          icon={LockKeyhole}
          autoComplete="new-password"
          minLength={8}
          error={errors.password}
          required
        />

        <AuthInput
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="Enter your password again"
          value={form.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
          error={errors.confirmPassword}
          required
        />

        <div>
          <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-blue-600"
            />
            <span>
              I agree to the terms of use and privacy policy.
            </span>
          </label>

          {errors.agree && (
            <p className="mt-2 text-xs text-red-600" role="alert">
              {errors.agree}
            </p>
          )}
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
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          Create account
          <ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-bold text-blue-600 hover:text-blue-800"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  )
}