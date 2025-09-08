import type {
  TUsersInsert,
  TUserSelect,
} from '@/helpers/global-types/drizzle-types'
import type { IGetUsers } from './types'

export interface UserRepository {
  findByUserId(id: string): Promise<TUserSelect | null>
  findManyUser(): Promise<IGetUsers[] | null>
  findManyByManagerId(userId: string): Promise<IGetUsers[] | null>
  findByEmail(email: string): Promise<TUserSelect | null>
  create(data: TUsersInsert): Promise<TUserSelect>
}
