import type { TUserSelect } from '@/helpers/global-types/drizzle-types'
import type { TUserRoles } from '@/helpers/global-types/types'
import type { IGetUsers } from '@/repositories/drizzle/users/types'

export interface IAuthenticateUsersUsecaseRequest {
  email: string
  password: string
}

export interface IAuthenticateUsersUsecaseResponse {
  user: TUserSelect
}

export interface IGetUserProfileUsecaseRequest {
  userId: string
}

export interface IGetUserProfileUsecaseResponse {
  user: TUserSelect
}

export interface IGetUsersUsecaseRequest {
  userId: string
}

export interface IGetUsersUsecaseResponse {
  users: IGetUsers[]
}
export interface ICreateUsersUsecaseRequest {
  email: string
  password: string
  name: string
  role: TUserRoles
  managerId: string
  userId: string
}
