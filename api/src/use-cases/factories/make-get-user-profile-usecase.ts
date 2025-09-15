import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'

import { GetProfileUsecase } from '../users/get-profile-usecase'

export function makeGetUserProfileUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const getUserProfileUsecase = new GetProfileUsecase(usersRepository)
  return getUserProfileUsecase
}
