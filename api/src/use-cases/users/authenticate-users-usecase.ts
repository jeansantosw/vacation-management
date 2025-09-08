import type { UserRepository } from '@/repositories/drizzle/users/users-repository'
import type {
  IAuthenticateUsersUsecaseRequest,
  IAuthenticateUsersUsecaseResponse,
} from './types'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { verify } from 'argon2'

export class AuthenticateUsersUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    password,
  }: IAuthenticateUsersUsecaseRequest): Promise<IAuthenticateUsersUsecaseResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = verify(user.password, password)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }
    return { user }
  }
}
