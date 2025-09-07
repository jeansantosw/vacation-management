import z from 'zod'

const userRoleSchema = z.enum(['admin', 'manager', 'collaborator'])

export const createRequestUserControllerSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
  name: z.string(),
  role: userRoleSchema,
})
