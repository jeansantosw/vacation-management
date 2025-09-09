import { FastifyRequest, FastifyReply } from 'fastify'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { ResourceNotExistsError } from '@/use-cases/users/errors/resource-not-exists-error'
import { updateUserControllerSchema, type GetUserParams } from './types'
// import { makeGetUserUseCase } from '@/use-cases/factories/make-get-user-usecase'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { makeUpdateUserUseCase } from '@/use-cases/factories/make-update-user-usecase'
// import { makeGetUsersUseCase } from '@/use-cases/factories/make-get-users-usecase'

export async function updateUserControllers(
  request: FastifyRequest<{ Params: GetUserParams }>,
  reply: FastifyReply,
) {
  const currentUserId = await request.getCurrentUserId()

  const userId = request.params.id
  const { email, name, role, managerId } = updateUserControllerSchema.parse(
    request.body,
  )
  try {
    const { getUsersUseCase, getUserDetailsUsecase, updateUserUsecase } =
      makeUpdateUserUseCase()

    // const getUsersUseCase = makeGetUsersUseCase()

    const { users } = await getUsersUseCase.execute({
      currentUserId,
    })

    const { user } = await getUserDetailsUsecase.execute({
      users,
      userId,
    })

    const updatedUser = await updateUserUsecase.execute({
      user,
      email,
      name,
      role,
      managerId,
    })

    return reply.status(204).send({ user: updatedUser })
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
