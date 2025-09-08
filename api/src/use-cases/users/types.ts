import type { TUserSelect } from '@/helpers/global-types/drizzle-types'

export interface IAuthenticateUsersUsecaseRequest {
  email: string
  password: string
}

export interface IAuthenticateUsersUsecaseReponse {
  user: TUserSelect
}
