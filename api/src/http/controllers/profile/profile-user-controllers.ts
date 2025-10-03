import { makeGetProfileUseCase } from '@/use-cases/_factories/profile/make-get-profile-usecase'
import { ResourceNotExistsError } from '@/use-cases/users/errors/resource-not-exists-error'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function profileUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const getUserProfileUseCase = makeGetProfileUseCase()

    const currentId = await request.getCurrentUserId()
    const { profile } = await getUserProfileUseCase.execute(currentId)

    return reply.status(200).send({ profile })
  } catch (error) {
    if (error instanceof ResourceNotExistsError) {
      return reply.status(404).send({ message: error.message })
    }
  }
}
