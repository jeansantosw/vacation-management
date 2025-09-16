import type { TUpdateProfile } from '@/helpers/global-types/profile-types/types'
import type { TCurrentId } from '@/helpers/global-types/type'
import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import { hash } from 'argon2'

export class UpdateProfileUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(
    currentId: TCurrentId,
    { email, password, name }: TUpdateProfile,
  ) {
    let passwordHash: string | undefined

    if (password) {
      passwordHash = await hash(password)
    }

    await this.userRepository.findProfileByIdToUpdate(currentId, {
      ...(email && { email }),
      ...(name && { name }),
      ...(passwordHash && { password: passwordHash }),
    })
  }
}
