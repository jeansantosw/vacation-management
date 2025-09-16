import z from 'zod'

export interface ISignInBody {
  email: string
  password: string
}

export interface IGetUserDetails {
  userId: string
}

export interface IUser {
  id: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'collaborator'
  managerId: string | null
}

export interface IGetUsersResponse {
  users: IUser[]
}

export interface IGetUserDatails {
  user: {
    id: string
    email: string
    name: string
    role: 'admin' | 'manager' | 'collaborator'
    managerId: string | null
  }
}

export interface IUpdateUser {
  name: string | null
  email: string | null
  role: 'admin' | 'manager' | 'collaborator'
  managerId: string | null
}

export const updateUserSchema = z.object({
  name: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  role: z.enum(['admin', 'manager', 'collaborator']).optional(),
  managerId: z.string().nullable().optional(),
})

export type TUpdateUser = z.infer<typeof updateUserSchema>
