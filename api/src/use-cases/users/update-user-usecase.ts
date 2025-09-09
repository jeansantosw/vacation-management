import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type {
  IUpdateUserUseCaseRequest,
  IUpdateUserUseCaseResponse,
} from './types'
import { NotFoundError } from '@/helpers/_errors/not-found-error'

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    user,
    email,
    name,
    role,
    managerId,
  }: IUpdateUserUseCaseRequest): Promise<IUpdateUserUseCaseResponse> {
    if (!user) {
      throw new NotFoundError('User not found.')
    }

    const updatedUser = await this.userRepository.findByIdToUpdateUser(
      user.id,
      {
        email,
        name,
        role,
        managerId,
      },
    )

    return updatedUser
  }
}
