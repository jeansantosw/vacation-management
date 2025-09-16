import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import type {
  IGetUserDetails,
  IGetUsers,
} from '@/helpers/global-types/users-types/types'

export class GetUserDetailsUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({ users, userId }: IGetUserDetails): Promise<IGetUsers> {
    if (!users) {
      throw new UnauthorizedError()
    }

    const userIdFound = users.find((user) => {
      return user.id === userId
    })

    if (!userIdFound) {
      throw new NotFoundError('User not found.')
    }

    return userIdFound
  }
}
