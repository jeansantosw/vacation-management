import z from 'zod'

export const currentIdSchema = z.string()

export type TCurrentId = z.infer<typeof currentIdSchema>

export const userRoleDTOSchema = z.enum(['admin', 'manager', 'collaborator'])

export type TUserRolesDTO = z.infer<typeof userRoleDTOSchema>
