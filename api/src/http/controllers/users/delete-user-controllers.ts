import { FastifyRequest, FastifyReply } from 'fastify'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { makeDeleteUserUseCase } from '@/use-cases/_factories/users/make-delete-user-usecase'
import type { TUserParamsDTOS } from '@/helpers/global-types/users-types/types'

export async function deleteUserControllers(
  request: FastifyRequest<{ Params: TUserParamsDTOS }>,
  reply: FastifyReply,
) {
  const currentUserId = await request.getCurrentUserId()

  const userId = request.params.id

  try {
    const deleteUserUseCase = makeDeleteUserUseCase()

    await deleteUserUseCase.execute({ currentUserId, userId })

    return reply.status(204).send()
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return reply.status(401).send({
        message: error.message,
      })
    }
    if (error instanceof NotFoundError) {
      return reply.status(404).send({
        message: error.message,
      })
    }
    throw error
  }
}
