import z from 'zod'

export const userRoleSchema = z.enum(['admin', 'manager', 'collaborator'])

export type TUserRoles = z.infer<typeof userRoleSchema>
