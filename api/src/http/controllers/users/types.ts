import { userRoleSchema } from '@/helpers/global-types/types'
import z from 'zod'

export const createUserControllerSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
  name: z.string(),
  role: userRoleSchema,
  managerId: z.uuid(),
})

export const authenticateUserControllerSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
})

export const getUsersControllersSchema = z.object({
  userId: z.string(),
})

export const getUserParamsSchema = z.object({
  id: z.uuid(),
})

export type GetUserParams = z.infer<typeof getUserParamsSchema>
