import type { TUserSelect } from '@/helpers/global-types/drizzle-types'
import type { IGetUsersBasic, TUserRoles } from '@/helpers/global-types/types'

// Interface authenticate
export interface IAuthenticateUsersUsecaseRequest {
  email: string
  password: string
}

export interface IAuthenticateUsersUsecaseResponse {
  user: TUserSelect
}

// Interface profile
export interface IGetUserProfileUsecaseRequest {
  userId: string
}

export interface IGetUserProfileUsecaseResponse {
  user: TUserSelect
}

//  Interface get users
export interface IGetUsersUsecaseRequest {
  currentUserId: string
}

export interface IGetUsersUsecaseResponse {
  users: IGetUsersBasic[]
}

// Interface create users
export interface ICreateUsersUsecaseRequest {
  email: string
  password: string
  name: string
  role: TUserRoles
  managerId: string
  userId: string
}

// Interface get user
export interface IGetUserDetailsUsecaseRequest {
  users: IGetUsersBasic[]
  userId: string
}

export interface IGetUserDetailsUsecaseResponse {
  user: IGetUsersBasic
}
