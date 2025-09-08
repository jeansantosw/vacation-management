import { userRoleSchema } from '@/helpers/global-types/types'
import z from 'zod'

export const createUserControllerSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
  name: z.string(),
  role: userRoleSchema,
})

export const authenticateUserControllerSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
})
