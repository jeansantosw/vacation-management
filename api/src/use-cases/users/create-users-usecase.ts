import { hash } from 'argon2'
import type { TUsersInsert } from '@/helpers/global-types/drizzle-types'
import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

export class CreateUsersUsecase {
  constructor(private usersRepository: UserRepository) {}
  async execute({ email, password, name, role }: TUsersInsert) {
    const passwordHass = await hash(password)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      // Está retornando 500 é preciso tratar esse erro
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      email,
      password: passwordHass,
      name,
      role,
    })

    return { user }
  }
}
