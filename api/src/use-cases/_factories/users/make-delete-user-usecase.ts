import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { DeleteUserUseCase } from '@/use-cases/users/delete-user-usecase'

export function makeDeleteUserUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository)

  return deleteUserUseCase
}
