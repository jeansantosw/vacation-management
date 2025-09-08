import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { CreateUsersUsecase } from '../users/create-users-usecase'

export function makeCreateUsersUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const createUsersUsecase = new CreateUsersUsecase(usersRepository)
  return createUsersUsecase
}
