import type { TUserSelect } from '@/helpers/global-types/drizzle-types'
import type {
  IGetUsers,
  TUserRoles,
} from '@/helpers/global-types/users-types/types'

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
  user: IGetUsers
}

//  Interface get users

export interface IGetUsersUsecaseResponse {
  users: IGetUsers[]
}

// Interface create users
export interface ICreateUsersUsecaseRequest {
  email: string
  password: string
  name: string
  role: TUserRoles
  managerId: string | null
  userId: string
}

// Interface get user
export interface IGetUserDetailsUsecaseRequest {
  users: IGetUsers[]
  userId: string
}

export interface IGetUserDetailsUsecaseResponse {
  user: IGetUsers
}

// Interface update user
export interface IUpdateUseCaseRequest {
  id?: string
  email?: string
  name?: string
  role?: TUserRoles
  managerId?: string | null
}

// Request do use case
export interface IUpdateUserUseCaseRequest {
  user: IGetUsers
  email?: string
  name?: string
  role?: TUserRoles
  managerId?: string | null
}

// Response do use case
export interface IUpdateUserUseCaseResponse {
  id: string
  email?: string
  name?: string
  role?: TUserRoles
  managerId?: string | null
}

export interface IDeleteUserUseCase {
  currentUserId: string
  userId: string
}
