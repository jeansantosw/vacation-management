import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { GetProfileUsecase } from '../../profile/get-profile-usecase'

export function makeGetProfileUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const getUserProfileUsecase = new GetProfileUsecase(usersRepository)
  return getUserProfileUsecase
}
