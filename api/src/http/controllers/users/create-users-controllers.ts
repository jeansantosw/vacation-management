import { FastifyRequest, FastifyReply } from 'fastify'
import { createUserControllerSchema } from './types'
import { UserAlreadyExistsError } from '@/use-cases/users/errors/user-already-exists-error'
import { makeCreateUsersUseCase } from '@/use-cases/factories/make-create-users-usecase'
export async function createUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password, name, role } = createUserControllerSchema.parse(
    request.body,
  )
  try {
    const createUsersUsecase = makeCreateUsersUseCase()

    const { user } = await createUsersUsecase.execute({
      email,
      password,
      name,
      role,
    })

    return reply.status(201).send({ userId: user.id })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      reply.status(409).send({ message: error.message })
    }
    throw error
  }
}
