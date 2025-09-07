import type { FastifyInstance } from 'fastify'
import { getUsersControllers } from './controllers/users/get-users.controllers'
import z from 'zod'

export async function appGetUsersRoutes(app: FastifyInstance) {
  app.get(
    '/users',
    {
      schema: {
        tags: ['Users'],
        summary: 'Get all users',
        response: {
          201: z.object({
            users: z.array(
              z.object({
                email: z.uuid(),
                name: z.string(),
              }),
            ),
          }),
        },
      },
    },
    getUsersControllers,
  )
}
