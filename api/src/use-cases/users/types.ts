import type { TUserSelect } from '@/helpers/global-types/drizzle-types'

export interface IAuthenticateUsersUsecaseRequest {
  email: string
  password: string
}

export interface IAuthenticateUsersUsecaseResponse {
  user: TUserSelect
}

export interface IGetUserProfileUsecaseUsecaseRequest {
  userId: string
}

export interface IGetUserProfileUsecaseUsecaseResponse {
  user: TUserSelect
}
