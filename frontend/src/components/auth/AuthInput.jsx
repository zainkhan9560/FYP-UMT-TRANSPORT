import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function AuthInput({
  id,
  label,
  labelAction,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  autoComplete,
  minLength,
  disabled = false,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  autoFocus = false,
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
  icon: Icon,
  error,
}) {
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && visible ? 'text' : type

  const labelElement = (
    <label className="field-label" htmlFor={id}>
      {label}
    </label>
  )

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/dev/zain
  return (
    <div className="auth-field">
      {labelAction ? (
        <div className="label-row">
          {labelElement}
          {labelAction}
<<<<<<< HEAD
=======
=======
  const labelExtra = error ? (
    <span id={`${id}-error`} className="input-error-text" role="alert">
      {error}
    </span>
  ) : (
    labelAction
  )

  return (
    <div className="auth-field">
      {labelExtra ? (
        <div className="label-row">
          {labelElement}
          {labelExtra}
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
        </div>
      ) : (
        labelElement
      )}

      <div className="auth-input-wrap">
        {Icon && (
          <span className="auth-input-icon" aria-hidden="true">
<<<<<<< HEAD
            <Icon size={18} />
=======
<<<<<<< HEAD
            <Icon size={18} />
=======
            <Icon size={17} />
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
          </span>
        )}

        <input
          id={id}
          name={name}
          type={inputType}
          className={`auth-input ${Icon ? 'has-icon' : ''} ${error ? 'input-error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          minLength={minLength}
          disabled={disabled}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          autoFocus={autoFocus}
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />

        {isPassword && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setVisible((previous) => !previous)}
            aria-label={visible ? 'Hide password' : 'Show password'}
            disabled={disabled}
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/dev/zain
      {error && (
        <p id={`${id}-error`} className="input-error-text" role="alert">
          {error}
        </p>
      )}
<<<<<<< HEAD
=======
=======
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
    </div>
  )
}
