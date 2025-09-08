import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type {
  IGetUserProfileUsecaseRequest,
  IGetUserProfileUsecaseResponse,
} from './types'
import { ResourceNotExistsError } from './errors/resource-not-exists-error'

export class GetUserProfileUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
  }: IGetUserProfileUsecaseRequest): Promise<IGetUserProfileUsecaseResponse> {
    const user = await this.userRepository.findByUserId(userId)

    if (!user) {
      throw new ResourceNotExistsError()
    }

    return { user }
  }
}
