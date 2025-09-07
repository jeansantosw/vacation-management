import { db } from '@/database/client'
import { users } from '@/database/schema'
import { FastifyRequest, FastifyReply } from 'fastify'
import { createRequestUserControllerSchema } from './types'
import { UnauthorizedError } from '@/helpers/_errors/unauthorized-error'
import { hash } from 'argon2'
export async function createUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password, name, role } =
    createRequestUserControllerSchema.parse(request.body)
  const passwordHass = await hash(password)

  try {
    const result = await db
      .insert(users)
      .values({
        email,
        password: passwordHass,
        name,
        role,
      })
      .returning()

    return reply.status(201).send({ userId: result[0].id })
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      reply.status(403).send({ message: error.message })
    }
    request.log.error(error)
    return reply.status(500).send({ message: 'Internal server error' })
  }
}
