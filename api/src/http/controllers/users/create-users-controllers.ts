import { FastifyRequest, FastifyReply } from 'fastify'
import { createRequestUserControllerSchema } from './types'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { CreateUsersUsecase } from '@/use-cases/users/create-users-usecase'
export async function createUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password, name, role } =
    createRequestUserControllerSchema.parse(request.body)
  try {
    const usersRepository = new DrizzleUsersRepository()
    const createUsersUsecase = new CreateUsersUsecase(usersRepository)

    const user = await createUsersUsecase.execute({
      email,
      password,
      name,
      role,
    })

    return reply.status(201).send({ userId: user.id })
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      reply.status(409).send({ message: error.message })
    }
    request.log.error(error)
    return reply.status(500).send({ message: 'Internal server error❌' })
  }
}
