import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { verify } from 'argon2'
import type {
  IAuthenticateUsersResponseDTO,
  TAuthenticateUserDTO,
} from '@/helpers/global-types/authenticate-types/types'

export class AuthenticateUsersUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    password,
  }: TAuthenticateUserDTO): Promise<IAuthenticateUsersResponseDTO> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = verify(user.password, password)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }
    return user
  }
}
