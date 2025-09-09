import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type {
  IGetUserDetailsUsecaseRequest,
  IGetUserDetailsUsecaseResponse,
} from './types'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'

export class GetUserDetailsUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    users,
    userId,
  }: IGetUserDetailsUsecaseRequest): Promise<IGetUserDetailsUsecaseResponse> {
    if (!users) {
      throw new UnauthorizedError()
    }

    const userIdFound = users.find((user) => {
      return user.id === userId
    })

    if (!userIdFound) {
      throw new NotFoundError('User not found.')
    }

    return { user: userIdFound }
  }
}
