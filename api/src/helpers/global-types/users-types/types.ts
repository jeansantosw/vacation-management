import z from 'zod'
import { userRoleSchema } from '../type'

export const IGetUsersDTOSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  role: userRoleSchema,
  managerId: z.string().nullable(),
})

export type IGetUsers = z.infer<typeof IGetUsersDTOSchema>

export interface IGetUsersByCurremtUsecaseRequest {
  currentUserId: string
}
