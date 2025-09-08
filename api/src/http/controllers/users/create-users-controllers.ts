import { FastifyRequest, FastifyReply } from 'fastify'
import { createRequestUserControllerSchema } from './types'
import { DrizzleUsersRepository } from '@/repositories/drizzle/users/drizzle-users-repository'
import { CreateUsersUsecase } from '@/use-cases/users/create-users-usecase'
import { UserAlreadyExistsError } from '@/use-cases/users/errors/user-already-exists-error'
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
    if (error instanceof UserAlreadyExistsError) {
      reply.status(409).send({ message: error.message })
    }
    throw error
  }
}
