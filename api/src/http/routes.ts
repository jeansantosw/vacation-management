import type { FastifyInstance } from 'fastify'
import { getUsersControllers } from './controllers/users/get-users-controllers'
import z from 'zod'
import { createRequestUserControllerSchema } from './controllers/users/types'
import { createUsersControllers } from './controllers/users/create-users-controllers'

export async function appGetUsersRoutes(app: FastifyInstance) {
  app.get(
    '/users',
    {
      schema: {
        tags: ['Users'],
        summary: 'Get all users',
        description: 'This route lists all users of the application.',
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

export async function appCreateUsersRoutes(app: FastifyInstance) {
  app.post(
    '/users',
    {
      schema: {
        tags: ['Users'],
        summary: 'Create a user',
        description: 'This route only creates application users.',
        body: createRequestUserControllerSchema,
        response: {
          201: z.object({
            userId: z.string(),
          }),
        },
      },
    },
    createUsersControllers,
  )
}
