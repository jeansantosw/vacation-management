import z from 'zod'
import { userRoleDTOSchema } from '../type'

// #################### CREATE  ####################

export const createUserDTOSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
  name: z.string(),
  role: userRoleDTOSchema.default('collaborator'),
  managerId: z.uuid().nullable().optional(),
})

export type TCreateUserDTO = z.infer<typeof createUserDTOSchema>

// #################### GET USERS  ####################

export const IGetUsersDTOSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  role: userRoleDTOSchema,
  managerId: z.string().nullable(),
})

export type IGetUsers = z.infer<typeof IGetUsersDTOSchema>

export interface IGetUserDetails {
  users: IGetUsers[]
  userId: string
}

// #################### ID PARAMS  ####################

export const userParamsDTOSchema = z.object({
  id: z.uuid(),
})

export type TUserParamsDTOS = z.infer<typeof userParamsDTOSchema>

// #################### UPDATE  ####################

export const updateUserDTOSchema = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  role: userRoleDTOSchema.optional(),
  managerId: z.string().nullable().optional(),
})

export type TUpdateUserDTOS = z.infer<typeof updateUserDTOSchema>

// #################### DELETE  ####################

export interface IDeleteUserDTO {
  currentUserId: string
  userId: string
}
