import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { GetUserDetailsUsecase } from '../users/get-user-details-usecase'
import { GetUsersUsecase } from '../users/get-users-usecase'

export function makeGetUserUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const getUsersUseCase = new GetUsersUsecase(usersRepository)
  const getUserDetailsUsecase = new GetUserDetailsUsecase(usersRepository)

  return { getUsersUseCase, getUserDetailsUsecase }
}
