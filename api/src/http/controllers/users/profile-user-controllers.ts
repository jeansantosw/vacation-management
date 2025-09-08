import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-usecase'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function profileUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getUserProfileUseCase = makeGetUserProfileUseCase()

  const userId = await request.getCurrentUserId()

  const { user } = await getUserProfileUseCase.execute({
    userId,
  })

  // Refatorar o retorno de dados do usuario
  return reply.status(200).send({
    user: {
      ...user,
      password: undefined,
      managerId: undefined,
      createdAt: undefined,
      updatedAt: undefined,
    },
  })
}
