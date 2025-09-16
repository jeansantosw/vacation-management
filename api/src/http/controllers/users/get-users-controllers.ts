import { FastifyRequest, FastifyReply } from 'fastify'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { ResourceNotExistsError } from '@/use-cases/users/errors/resource-not-exists-error'
import { makeGetUsersUseCase } from '@/use-cases/_factories/users/make-get-users-usecase'

export async function getUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const currentUserId = await request.getCurrentUserId()
  try {
    const getUsersUseCase = makeGetUsersUseCase()

    const result = await getUsersUseCase.execute(currentUserId)

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
