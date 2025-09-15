import type { TUpdateProfile } from '@/helpers/global-types/profile-types/types'
import type { TCurrentId } from '@/helpers/global-types/type'
import type { UserRepository } from '@/repositories/drizzle/users/users-repository'

export class UpdateProfileUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(
    currentId: TCurrentId,
    { email, password, name }: TUpdateProfile,
  ) {
    await this.userRepository.findProfileByIdToUpdate(currentId, {
      email,
      password,
      name,
    })
  }
}
