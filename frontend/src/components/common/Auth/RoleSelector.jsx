import { BusFront, GraduationCap, ShieldCheck } from 'lucide-react'
import { ROLES, SIGNUP_ROLES, LOGIN_ROLES } from '../../utils/constants'

const ROLE_OPTIONS = [
  {
    value: ROLES.STUDENT,
    label: 'Student',
    Icon: GraduationCap,
  },
  {
    value: ROLES.DRIVER,
    label: 'Driver',
    Icon: BusFront,
  },
  {
    value: ROLES.ADMIN,
    label: 'Admin',
    Icon: ShieldCheck,
  },
]

export default function RoleSelector({
  value,
  onChange,
  disabled = false,
  allowedRoles = SIGNUP_ROLES,
}) {
  const options = ROLE_OPTIONS.filter((role) =>
    allowedRoles.includes(role.value),
  )

  return (
    <fieldset disabled={disabled}>
      <legend className="mb-3 text-sm font-semibold text-slate-700">
        Account type
      </legend>

      <div
        className={`grid gap-3 ${
          options.length === 3 ? 'grid-cols-3' : 'grid-cols-2'
        }`}
      >
        {options.map(({ value: roleValue, label, Icon }) => {
          const selected = value === roleValue

          return (
            <button
              type="button"
              key={roleValue}
              onClick={() => onChange(roleValue)}
              aria-pressed={selected}
              className={`flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl border p-3 text-sm font-semibold transition sm:p-4 ${
                selected
                  ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600/10'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-slate-50'
              } disabled:cursor-not-allowed disabled:opacity-50`}
            >
              <Icon size={22} />
              <span>{label}</span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}