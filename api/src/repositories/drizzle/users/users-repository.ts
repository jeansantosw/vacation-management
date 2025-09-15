import type { TUserSelect } from '@/helpers/global-types/drizzle-types'
import type {
  IGetUsers,
  TCreateUserDTO,
  TUpdateUserDTOS,
} from '@/helpers/global-types/users-types/types'
import type {
  IGetCurrentProfile,
  TUpdateProfile,
} from '@/helpers/global-types/profile-types/types'
import type { TCurrentId } from '@/helpers/global-types/type'

export interface UserRepository {
  findByUserId(id: string): Promise<IGetUsers | null>
  findManyUser(): Promise<IGetUsers[] | null>
  findByProfileId(currentId: TCurrentId): Promise<IGetCurrentProfile>
  findProfileByIdToUpdate(
    currentId: TCurrentId,
    updateProfile: TUpdateProfile,
  ): Promise<void>
  findManyByManagerId(userId: string): Promise<IGetUsers[] | null>
  findByIdToUpdateUser(
    userId: string,
    userUpdate: TUpdateUserDTOS,
  ): Promise<IGetUsers>
  findByUserIdForShutdown(userId: string): Promise<void>
  findByEmail(email: string): Promise<TUserSelect | null>
  create(data: TCreateUserDTO): Promise<TCreateUserDTO>
}
