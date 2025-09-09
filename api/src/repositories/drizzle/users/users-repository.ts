import type {
  TUsersInsert,
  TUserSelect,
} from '@/helpers/global-types/drizzle-types'
import type { IGetUsersBasic } from '@/helpers/global-types/types'

export interface UserRepository {
  findByUserId(id: string): Promise<IGetUsersBasic | null>
  findManyUser(): Promise<IGetUsersBasic[] | null>
  findManyByManagerId(userId: string): Promise<IGetUsersBasic[] | null>
  findByEmail(email: string): Promise<TUserSelect | null>
  create(data: TUsersInsert): Promise<TUserSelect>
}
