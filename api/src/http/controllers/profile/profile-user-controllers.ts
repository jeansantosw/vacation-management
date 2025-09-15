import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-usecase'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function profileUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getUserProfileUseCase = makeGetUserProfileUseCase()

  const currentId = await request.getCurrentUserId()

  const { profile } = await getUserProfileUseCase.execute(currentId)

  // Refatorar o retorno de dados do usuario
  return reply.status(200).send({ profile })
}
