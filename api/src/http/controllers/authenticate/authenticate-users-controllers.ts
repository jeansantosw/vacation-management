import { FastifyRequest, FastifyReply } from 'fastify'
import { InvalidCredentialsError } from '@/use-cases/users/errors/invalid-credentials-error'
import { authenticateUserDTOSchema } from '@/helpers/global-types/authenticate-types/types'
import { makeAuthenticateUsersUseCase } from '@/use-cases/_factories/authenticate/make-authenticate-users-usecase'

export async function authenticateUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password } = authenticateUserDTOSchema.parse(request.body)
  try {
    const authenticateUsersUsecase = makeAuthenticateUsersUseCase()

    const user = await authenticateUsersUsecase.execute({
      email,
      password,
    })

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
        },
      },
    )

    return reply.status(200).send({ token })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      reply.status(400).send({ message: error.message })
    }
    throw error
  }
}
