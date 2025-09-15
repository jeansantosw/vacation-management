import { userRoleDTOSchema } from '@/helpers/global-types/type'
import z from 'zod'

export const createUserControllerSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
  name: z.string(),
  role: userRoleDTOSchema.default('collaborator'),
  managerId: z.uuid().nullable().optional(),
})

export const getUsersControllersSchema = z.object({
  userId: z.string(),
})

export const getUserParamsSchema = z.object({
  id: z.uuid(),
})

export type GetUserParams = z.infer<typeof getUserParamsSchema>

export const updateUserControllerSchema = z.object({
  email: z.email().optional(),
  name: z.string().optional(),
  role: userRoleDTOSchema,
  managerId: z.string().nullable().optional(),
})
