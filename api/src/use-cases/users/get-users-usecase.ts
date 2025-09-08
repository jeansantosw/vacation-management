import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type { IGetUsersUsecaseRequest, IGetUsersUsecaseResponse } from './types'
import { ResourceNotExistsError } from './errors/resource-not-exists-error'

export class GetUsersUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
  }: IGetUsersUsecaseRequest): Promise<IGetUsersUsecaseResponse> {
    const users = await this.userRepository.findManyByUserId(userId)

    if (!users) {
      throw new ResourceNotExistsError()
    }

    return { users }
  }
}
