import { FastifyRequest, FastifyReply } from 'fastify'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { ResourceNotExistsError } from '@/use-cases/users/errors/resource-not-exists-error'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { makeGetUserUseCase } from '@/use-cases/_factories/users/make-get-user-usecase'
import type { TUserParamsDTOS } from '@/helpers/global-types/users-types/types'

export async function getUserControllers(
  request: FastifyRequest<{ Params: TUserParamsDTOS }>,
  reply: FastifyReply,
) {
  const currentUserId = await request.getCurrentUserId()

  const userId = request.params.id
  try {
    const { getUsersUseCase, getUserDetailsUsecase } = makeGetUserUseCase()

    const users = await getUsersUseCase.execute(currentUserId)

    const user = await getUserDetailsUsecase.execute({
      users,
      userId,
    })

    return reply.status(200).send({ user })
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
    if (error instanceof NotFoundError) {
      return reply.status(404).send({
        message: error.message,
      })
    }
    throw error
  }
}
