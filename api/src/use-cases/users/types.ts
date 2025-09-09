import type { TUserSelect } from '@/helpers/global-types/drizzle-types'
import type {
  IGetUsersBasic,
  IUser,
  TUserRoles,
} from '@/helpers/global-types/types'

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
  userId: string
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
export interface IGetUserUsecaseRequest {
  currentUserId: string
  userId: string
}

export interface IGetUserUsecaseResponse {
  user: IUser
}
