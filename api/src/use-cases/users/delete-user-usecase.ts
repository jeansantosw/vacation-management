import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type { IDeleteUserUseCase } from './types'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ currentUserId, userId }: IDeleteUserUseCase): Promise<void> {
    const user = await this.userRepository.findByUserId(currentUserId)

    if (!user) {
      throw new NotFoundError('User not found.')
    }

    if (user.role !== 'admin') {
      throw new UnauthorizedError('Only administrators can delete users')
    }

    const userToBeDeleted = await this.userRepository.findByUserId(userId)

    if (!userToBeDeleted) {
      throw new NotFoundError('User not found.')
    }

    await this.userRepository.findByUserIdForShutdown(userToBeDeleted.id)
  }
}
