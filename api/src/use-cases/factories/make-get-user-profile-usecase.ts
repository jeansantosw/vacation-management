import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'

import { GetUserProfileUsecase } from '../users/get-user-profile-usecase'

export function makeGetUserProfileUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const getUserProfileUsecase = new GetUserProfileUsecase(usersRepository)
  return getUserProfileUsecase
}
