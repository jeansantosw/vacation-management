import { FastifyRequest, FastifyReply } from 'fastify'
import { createUserControllerSchema } from './types'
import { UserAlreadyExistsError } from '@/use-cases/users/errors/user-already-exists-error'
import { makeCreateUsersUseCase } from '@/use-cases/factories/make-create-users-usecase'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { NotFoundError } from '@/helpers/_errors/not-found-error'

export async function createUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password, name, role, managerId } =
    createUserControllerSchema.parse(request.body)
  const userId = await request.getCurrentUserId()

  try {
    const createUsersUsecase = makeCreateUsersUseCase()

    const { user } = await createUsersUsecase.execute({
      email,
      password,
      name,
      role,
      userId,
      managerId,
    })

    return reply.status(201).send({ userId: user.id })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    if (error instanceof UnauthorizedError) {
      return reply.status(401).send({ message: error.message })
    }

    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }
    throw error
  }
}
