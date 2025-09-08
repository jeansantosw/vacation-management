import type { FastifyInstance } from 'fastify'
import { getUsersControllers } from './controllers/users/get-users-controllers'
import z from 'zod'
import {
  authenticateUserControllerSchema,
  createUserControllerSchema,
} from './controllers/users/types'
import { createUsersControllers } from './controllers/users/create-users-controllers'
import { authenticateUsersControllers } from './controllers/users/authenticate-users-controllers'

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
        body: createUserControllerSchema,
        response: {
          201: z.object({
            userId: z.uuid(),
          }),
        },
      },
    },
    createUsersControllers,
  )
}

export async function appAuthenticateUsersRoutes(app: FastifyInstance) {
  app.post(
    '/sessions',
    {
      schema: {
        tags: ['Users'],
        summary: 'Sessions user',
        description: '',
        body: authenticateUserControllerSchema,
        response: 200,
      },
    },
    authenticateUsersControllers,
  )
}
