export const ROLES = Object.freeze({
  STUDENT: 'student',
  DRIVER: 'driver',
  ADMIN: 'admin',
})

/** Roles that may self-register. Admin accounts are provisioned server-side only. */
export const SIGNUP_ROLES = Object.freeze([ROLES.STUDENT, ROLES.DRIVER])

export const MIN_PASSWORD_LENGTH = 8
