import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { GetUserDetailsUsecase } from '@/use-cases/users/get-user-details-usecase'
import { GetUsersUsecase } from '@/use-cases/users/get-users-usecase'

export function makeGetUserUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const getUsersUseCase = new GetUsersUsecase(usersRepository)
  const getUserDetailsUsecase = new GetUserDetailsUsecase(usersRepository)

  return { getUsersUseCase, getUserDetailsUsecase }
}
