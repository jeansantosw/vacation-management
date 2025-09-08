import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { AuthenticateUsersUsecase } from '../users/authenticate-users-usecase'

export function makeAuthenticateUsersUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const authenticateUsersUsecase = new AuthenticateUsersUsecase(usersRepository)
  return authenticateUsersUsecase
}
