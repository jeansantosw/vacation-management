import type {
  TUsersInsert,
  TUserSelect,
} from '@/helpers/global-types/drizzle-types'

export interface UserRepository {
  findById(id: string): Promise<TUserSelect | null>
  findByEmail(email: string): Promise<TUserSelect | null>
  create(data: TUsersInsert): Promise<TUserSelect>
}
