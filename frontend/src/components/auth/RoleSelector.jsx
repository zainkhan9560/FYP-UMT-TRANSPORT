<<<<<<< HEAD
import { BusFront, GraduationCap } from 'lucide-react'

import { ROLES, SIGNUP_ROLES } from '../../utils/constants.js'
=======
<<<<<<< HEAD
import { BusFront, GraduationCap, ShieldCheck } from 'lucide-react'

import { ROLES } from '../../utils/constants.js'
=======
import { BusFront, GraduationCap } from 'lucide-react'

import { ROLES, SIGNUP_ROLES } from '../../utils/constants.js'
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain

const ROLE_OPTIONS = [
  { value: ROLES.STUDENT, label: 'Student', Icon: GraduationCap },
  { value: ROLES.DRIVER, label: 'Driver', Icon: BusFront },
<<<<<<< HEAD
=======
<<<<<<< HEAD
  { value: ROLES.ADMIN, label: 'Admin', Icon: ShieldCheck },
=======
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
]

export default function RoleSelector({
  value,
  onChange,
  disabled = false,
<<<<<<< HEAD
  allowedRoles = SIGNUP_ROLES,
=======
<<<<<<< HEAD
  allowedRoles = Object.values(ROLES),
=======
  allowedRoles = SIGNUP_ROLES,
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
}) {
  const options = ROLE_OPTIONS.filter((role) => allowedRoles.includes(role.value))

  return (
    <fieldset className="role-fieldset" disabled={disabled}>
<<<<<<< HEAD
      <legend className="sr-only">Account type</legend>
=======
<<<<<<< HEAD
      <legend className="field-label">Account type</legend>
=======
      <legend className="sr-only">Account type</legend>
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain

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
