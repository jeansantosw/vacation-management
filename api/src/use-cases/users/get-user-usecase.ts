import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type { IGetUserUsecaseRequest, IGetUserUsecaseResponse } from './types'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'

export class GetUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    currentUserId,
    userId,
  }: IGetUserUsecaseRequest): Promise<IGetUserUsecaseResponse> {
    if (!currentUserId) {
      throw new UnauthorizedError()
    }
    const user = await this.userRepository.findByUserId(userId)

    if (!user) {
      throw new NotFoundError('User not found.')
    }

    return { user }
  }
}
