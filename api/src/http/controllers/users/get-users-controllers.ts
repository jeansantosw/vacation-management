import { FastifyRequest, FastifyReply } from 'fastify'
import { makeGetUsersUseCase } from '@/use-cases/factories/make-get-users-usecase'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { ResourceNotExistsError } from '@/use-cases/users/errors/resource-not-exists-error'

export async function getUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userId = await request.getCurrentUserId()
  try {
    const getUsersUseCase = makeGetUsersUseCase()

    const result = await getUsersUseCase.execute({
      userId,
    })

    return reply.send({ users: result })
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return reply.status(401).send({
        message: error.message,
      })
    }
    if (error instanceof ResourceNotExistsError) {
      return reply.status(404).send({
        message: error.message,
      })
    }
    throw error
  }
}
