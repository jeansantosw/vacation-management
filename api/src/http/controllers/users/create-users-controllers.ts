import { FastifyRequest, FastifyReply } from 'fastify'
import { UserAlreadyExistsError } from '@/use-cases/users/errors/user-already-exists-error'
import { makeCreateUsersUseCase } from '@/use-cases/_factories/users/make-create-users-usecase'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { NotFoundError } from '@/helpers/_errors/not-found-error'
import { createUserDTOSchema } from '@/helpers/global-types/users-types/types'

export async function createUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password, name, role, managerId } = createUserDTOSchema.parse(
    request.body,
  )
  const currentId = await request.getCurrentUserId()

  try {
    const createUsersUsecase = makeCreateUsersUseCase()

    const user = await createUsersUsecase.execute(currentId, {
      email,
      password,
      name,
      role,
      managerId,
    })

    return reply.status(201).send({ userId: user })
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
