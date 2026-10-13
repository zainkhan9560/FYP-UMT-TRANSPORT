import { BusFront, GraduationCap, ShieldCheck } from 'lucide-react'

import { ROLES } from '../../utils/constants.js'

const ROLE_OPTIONS = [
  { value: ROLES.STUDENT, label: 'Student', Icon: GraduationCap },
  { value: ROLES.DRIVER, label: 'Driver', Icon: BusFront },
  { value: ROLES.ADMIN, label: 'Admin', Icon: ShieldCheck },
]

export default function RoleSelector({
  value,
  onChange,
  disabled = false,
  allowedRoles = Object.values(ROLES),
}) {
  const options = ROLE_OPTIONS.filter((role) => allowedRoles.includes(role.value))

  return (
    <fieldset className="role-fieldset" disabled={disabled}>
      <legend className="field-label">Account type</legend>

      <div className="role-selector" style={{ '--role-count': options.length }}>
        {options.map(({ value: roleValue, label, Icon }) => (
          <button
            type="button"
            key={roleValue}
            className={`role-option ${value === roleValue ? 'selected' : ''}`}
            onClick={() => onChange(roleValue)}
            aria-pressed={value === roleValue}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </fieldset>
  )
}
