import { hash } from 'argon2'
import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import type { TCreateUserDTO } from '@/helpers/global-types/users-types/types'
import type { TCurrentId } from '@/helpers/global-types/type'

export class CreateUsersUsecase {
  constructor(private usersRepository: UserRepository) {}
  async execute(
    currentId: TCurrentId,
    { email, password, name, role, managerId }: TCreateUserDTO,
  ): Promise<TCreateUserDTO> {
    const requestingUser = await this.usersRepository.findByUserId(currentId)

    if (!requestingUser || requestingUser.role !== 'admin') {
      throw new UnauthorizedError('Only administrators can create users.')
    }

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    if (role === 'collaborator') {
      if (!managerId) {
        throw new NotFoundError('An employee must have a manager.')
      }

      const manager = await this.usersRepository.findByUserId(managerId)

      if (!manager || manager.role !== 'manager') {
        throw new NotFoundError(
          'The manager ID is invalid or does not correspond to a manager.',
        )
      }
    }

    const passwordHass = await hash(password)

    const user = await this.usersRepository.create({
      email,
      password: passwordHass,
      name,
      role,
      managerId: role === 'collaborator' ? managerId : null,
    })

    return user
  }
}
