import type { TUserRoles } from '@/helpers/global-types/types'

export interface IUpdateUseCase {
  email?: string
  name?: string
  role?: TUserRoles
  managerId?: string | null
}

export interface IUpdateUseCaseRepository {
  user: {
    id: string
    email: string
    name: string
    role: TUserRoles
    managerId: string | null
  }
}
