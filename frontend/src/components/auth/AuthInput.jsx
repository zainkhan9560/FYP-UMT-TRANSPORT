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

  return (
    <div className="auth-field">
      {labelAction ? (
        <div className="label-row">
          {labelElement}
          {labelAction}
        </div>
      ) : (
        labelElement
      )}

      <div className="auth-input-wrap">
        {Icon && (
          <span className="auth-input-icon" aria-hidden="true">
            <Icon size={18} />
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

      {error && (
        <p id={`${id}-error`} className="input-error-text" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
