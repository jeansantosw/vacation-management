import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type {
  IGetUserProfileUsecaseUsecaseRequest,
  IGetUserProfileUsecaseUsecaseResponse,
} from './types'
import { ResourceNotExistsError } from './errors/resource-not-exists-error'

export class GetUserProfileUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
  }: IGetUserProfileUsecaseUsecaseRequest): Promise<IGetUserProfileUsecaseUsecaseResponse> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new ResourceNotExistsError()
    }

    return { user }
  }
}
