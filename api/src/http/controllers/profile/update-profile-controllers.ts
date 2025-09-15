import { FastifyRequest, FastifyReply } from 'fastify'
import { updateProfileSchema } from '@/helpers/global-types/profile-types/types'
import { makeUpdateProfileUseCase } from '@/use-cases/_factories/profile/make-update-profile-usecase'
// import { hash } from 'argon2'

export async function updateProfileControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const currentUserId = await request.getCurrentUserId()
  const { email, password, name } = updateProfileSchema.parse(request.body)

  try {
    const updateProfileUseCase = makeUpdateProfileUseCase()
    // Criar validação para senha
    // const passwordHass = await hash(password)

    await updateProfileUseCase.execute(currentUserId, { email, password, name })

    return reply.status(200).send()
  } catch {
    throw new Error()
  }
}
