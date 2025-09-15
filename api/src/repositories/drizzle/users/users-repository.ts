import type {
  TUsersInsert,
  TUserSelect,
} from '@/helpers/global-types/drizzle-types'
import type { IGetUsers } from '@/helpers/global-types/users-types/types'
import type { IUpdateUseCase } from './types'

export interface UserRepository {
  findByUserId(id: string): Promise<IGetUsers | null>
  findManyUser(): Promise<IGetUsers[] | null>
  findManyByManagerId(userId: string): Promise<IGetUsers[] | null>
  findByIdToUpdateUser(
    userId: string,
    userUpdate: IUpdateUseCase,
  ): Promise<IGetUsers>
  findByUserIdForShutdown(userId: string): Promise<void>
  findByEmail(email: string): Promise<TUserSelect | null>
  create(data: TUsersInsert): Promise<TUserSelect>
}
