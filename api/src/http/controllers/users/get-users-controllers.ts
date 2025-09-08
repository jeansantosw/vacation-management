import { FastifyRequest, FastifyReply } from 'fastify'
import { getUsersControllersSchema } from './types'
import { makeGetUsersUseCase } from '@/use-cases/factories/make-get-users-usecase'

export async function getUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { userId } = getUsersControllersSchema.parse(request.body)
  try {
    const getUsersUseCase = makeGetUsersUseCase()

    const result = await getUsersUseCase.execute({
      userId,
    })

    return reply.send({ users: result })
  } catch (error) {
    reply.status(401).send({
      message: 'You do not have permission to view the company list',
    })
  }
}
