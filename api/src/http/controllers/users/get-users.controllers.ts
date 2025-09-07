import { db } from '@/database/client'
import { users } from '@/database/schema'
import { FastifyRequest, FastifyReply } from 'fastify'
export async function getUsersControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const result = await db
      .select({ name: users.name, email: users.email })
      .from(users)
    return reply.send({ users: result })
  } catch (error) {
    console.error(error)
    reply.status(401).send({
      message: 'You do not have permission to view the company list',
    })
  }
}
