import { makeGetProfileUseCase } from '@/use-cases/_factories/profile/make-get-profile-usecase'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function profileUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getUserProfileUseCase = makeGetProfileUseCase()

  const currentId = await request.getCurrentUserId()

  const { profile } = await getUserProfileUseCase.execute(currentId)

  return reply.status(200).send({ profile })
}
