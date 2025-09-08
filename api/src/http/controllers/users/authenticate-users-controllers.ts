import { FastifyRequest, FastifyReply } from 'fastify'
import { authenticateUserControllerSchema } from './types'
import { InvalidCredentialsError } from '@/use-cases/users/errors/invalid-credentials-error'
import { makeAuthenticateUsersUseCase } from '@/use-cases/factories/make-authenticate-users-usecase'

export async function authenticateUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password } = authenticateUserControllerSchema.parse(
    request.body,
  )
  try {
    const authenticateUsersUsecase = makeAuthenticateUsersUseCase()

    const { user } = await authenticateUsersUsecase.execute({
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
