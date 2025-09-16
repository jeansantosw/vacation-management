import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { GetUserDetailsUsecase } from '@/use-cases/users/get-user-details-usecase'
import { GetUsersUsecase } from '@/use-cases/users/get-users-usecase'
import { UpdateUserUseCase } from '@/use-cases/users/update-user-usecase'

export function makeUpdateUserUseCase() {
  const usersRepository = new DrizzleUsersRepository()
  const getUsersUseCase = new GetUsersUsecase(usersRepository)
  const getUserDetailsUsecase = new GetUserDetailsUsecase(usersRepository)
  const updateUserUsecase = new UpdateUserUseCase(usersRepository)

  return { getUsersUseCase, getUserDetailsUsecase, updateUserUsecase }
}
