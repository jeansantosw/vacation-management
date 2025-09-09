import z from 'zod'

export const userRoleSchema = z.enum(['admin', 'manager', 'collaborator'])

export type TUserRoles = z.infer<typeof userRoleSchema>

// export interface IGetUsersBasic {
//   id: string
//   name: string
//   email: string
//   role: TUserRoles
// }

export interface IGetUsersBasic {
  id: string
  email: string
  name: string
  role: TUserRoles
  managerId: string | null
}
