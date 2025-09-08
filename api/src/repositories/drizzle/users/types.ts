import type { TUserRoles } from '@/helpers/global-types/types'

export interface IGetUsers {
  name: string
  email: string
  role: TUserRoles
}
