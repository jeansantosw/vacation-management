import { FastifyRequest, FastifyReply } from 'fastify'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { ResourceNotExistsError } from '@/use-cases/users/errors/resource-not-exists-error'
import type { GetUserParams } from './types'
import { makeGetUserUseCase } from '@/use-cases/factories/make-get-user-usecase'

export async function getUserControllers(
  request: FastifyRequest<{ Params: GetUserParams }>,
  reply: FastifyReply,
) {
  const currentUserId = await request.getCurrentUserId()

  const userId = request.params.id
  try {
    const getUserUseCase = makeGetUserUseCase()

    const user = await getUserUseCase.execute({
      currentUserId,
      userId,
    })

    return reply.status(200).send(user)
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
