import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { GetUserUsecase } from '../users/get-user-usecase'

export function makeGetUserUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const getUserUsecase = new GetUserUsecase(usersRepository)
  return getUserUsecase
}
