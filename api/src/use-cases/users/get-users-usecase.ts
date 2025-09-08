import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type { IGetUsersUsecaseRequest, IGetUsersUsecaseResponse } from './types'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { ResourceNotExistsError } from './errors/resource-not-exists-error'

export class GetUsersUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
  }: IGetUsersUsecaseRequest): Promise<IGetUsersUsecaseResponse> {
    const user = await this.userRepository.findByUserId(userId)

    if (!user) {
      throw new NotFoundError('User not found.')
    }

    if (user.role === 'collaborator') {
      throw new UnauthorizedError(
        'Collaborators do not have access to this resource.',
      )
    }

    if (user.role === 'admin') {
      const users = await this.userRepository.findManyUser()
      if (!users) {
        throw new ResourceNotExistsError()
      }
      return { users }
    }

    if (user.role === 'manager') {
      const users = await this.userRepository.findManyByManagerId(user.id)
      if (!users) {
        throw new ResourceNotExistsError()
      }
      return { users }
    }

    throw new UnauthorizedError('Invalid role.')
  }
}
