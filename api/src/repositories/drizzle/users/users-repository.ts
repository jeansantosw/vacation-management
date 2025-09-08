import type {
  TUsersInsert,
  TUserSelect,
} from '@/helpers/global-types/drizzle-types'

export interface UserRepository {
  findByEmail(email: string): Promise<TUserSelect | null>
  create(data: TUsersInsert): Promise<TUserSelect>
}
