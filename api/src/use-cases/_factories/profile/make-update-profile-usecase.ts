import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { UpdateProfileUseCase } from '../../profile/update-profile-usecase'

export function makeUpdateProfileUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const updateProfileUseCase = new UpdateProfileUseCase(usersRepository)

  return updateProfileUseCase
}
