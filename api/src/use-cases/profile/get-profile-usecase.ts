import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type { TCurrentId } from '@/helpers/global-types/type'
import type { IGetCurrentProfile } from '@/helpers/global-types/profile-types/types'
import { ResourceNotExistsError } from '../users/errors/resource-not-exists-error'

export class GetProfileUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(currentId: TCurrentId): Promise<IGetCurrentProfile> {
    const { profile } = await this.userRepository.findByProfileId(currentId)

    if (!profile) {
      throw new ResourceNotExistsError()
    }

    return { profile }
  }
}
