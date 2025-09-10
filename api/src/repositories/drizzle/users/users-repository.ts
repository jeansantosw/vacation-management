import type {
  TUsersInsert,
  TUserSelect,
} from '@/helpers/global-types/drizzle-types'
import type { IGetUsersBasic } from '@/helpers/global-types/types'
import type { IUpdateUseCase } from './types'
// import type { IUpdateUseCase } from './types'

export interface UserRepository {
  findByUserId(id: string): Promise<IGetUsersBasic | null>
  findManyUser(): Promise<IGetUsersBasic[] | null>
  findManyByManagerId(userId: string): Promise<IGetUsersBasic[] | null>
  findByIdToUpdateUser(
    userId: string,
    userUpdate: IUpdateUseCase,
  ): Promise<IGetUsersBasic>
  findByUserIdForShutdown(userId: string): Promise<void>
  findByEmail(email: string): Promise<TUserSelect | null>
  create(data: TUsersInsert): Promise<TUserSelect>
}
