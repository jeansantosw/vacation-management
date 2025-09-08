import { hash } from 'argon2'
import { BadRequestError } from '@/helpers/_errors/bad-request-error'
import type { TUsersInsert } from '@/helpers/global-types/drizzle-types'
import type { UserRepository } from '@/repositories/drizzle/users/users-repository'

export class CreateUsersUsecase {
  constructor(private usersRepository: UserRepository) {}
  async execute({ email, password, name, role }: TUsersInsert) {
    const passwordHass = await hash(password)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      // Está retornando 500 é preciso tratar esse erro
      throw new BadRequestError(
        'There is already another user with the same email.',
      )
    }

    const user = await this.usersRepository.create({
      email,
      password: passwordHass,
      name,
      role,
    })

    return user
  }
}
