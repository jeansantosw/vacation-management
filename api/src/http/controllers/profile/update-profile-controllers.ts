import { FastifyRequest, FastifyReply } from 'fastify'
import { type GetUserParams } from '../users/types'
import { updateProfileSchema } from '@/helpers/global-types/profile-types/types'
import { makeUpdateProfileUseCase } from '@/use-cases/factories/make-update-profile-usecase'

export async function updateProfileControllers(
  request: FastifyRequest<{ Params: GetUserParams }>,
  reply: FastifyReply,
) {
  const currentUserId = await request.getCurrentUserId()
  const { email, password, name } = updateProfileSchema.parse(request.body)

  try {
    const updateProfileUseCase = makeUpdateProfileUseCase()

    await updateProfileUseCase.execute(currentUserId, { email, password, name })

    return reply.status(200).send()
  } catch {
    throw new Error()
  }
}
