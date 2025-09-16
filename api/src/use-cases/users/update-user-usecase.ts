import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import type {
  IGetUsers,
  TUpdateUserDTOS,
} from '@/helpers/global-types/users-types/types'

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    user: IGetUsers,
    { email, name, role, managerId }: TUpdateUserDTOS,
  ): Promise<IGetUsers> {
    if (!user) {
      throw new NotFoundError('User not found.')
    }

    if (role === 'collaborator') {
      if (!managerId) {
        throw new NotFoundError('An employee must have a manager.')
      }
    }

    const updatedUser = await this.userRepository.findByIdToUpdateUser(
      user.id,
      {
        ...(email && { email }),
        ...(name && { name }),
        ...(role && { role }),
        ...(managerId && { managerId }),
      },
    )

    return updatedUser
  }
}
