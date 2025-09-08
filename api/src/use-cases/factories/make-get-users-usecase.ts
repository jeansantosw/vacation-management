import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'

import { GetUsersUsecase } from '../users/get-users-usecase'

export function makeGetUsersUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const getUsersUsecase = new GetUsersUsecase(usersRepository)
  return getUsersUsecase
}
