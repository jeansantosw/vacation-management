import type { FastifyInstance } from 'fastify'
import { getUsersControllers } from './get-users-controllers'
import z from 'zod'
import {
  authenticateUserControllerSchema,
  createUserControllerSchema,
} from './types'
import { createUsersControllers } from './create-users-controllers'
import { authenticateUsersControllers } from './authenticate-users-controllers'
import { userRoleSchema } from '@/helpers/global-types/types'
import { profileUsersControllers } from './profile-user-controllers'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { auth } from '@/http/middlewares/auth'

export async function appAuthenticateUsersRoutes(app: FastifyInstance) {
  app.post(
    '/sessions',
    {
      schema: {
        tags: ['Users'],
        summary: 'Sessions user',
        description: '',
        body: authenticateUserControllerSchema,
        response: {
          200: z.object({
            token: z.string(),
          }),
        },
      },
    },
    authenticateUsersControllers,
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

export async function appGetUsersRoutes(app: FastifyInstance) {
  app.get(
    '/users',
    {
      schema: {
        tags: ['Users'],
        summary: 'Get all users',
        description: 'This route lists all users of the application.',
        querystring: z.object({
          userId: z.string(),
        }),
        response: {
          201: z.object({
            users: z.array(
              z.object({
                name: z.string(),
                email: z.uuid(),
                role: userRoleSchema,
              }),
            ),
          }),
        },
      },
    },
    getUsersControllers,
  )
}

export async function appProfileUserRoutes(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .post(
      '/me',
      {
        schema: {
          tags: ['Users'],
          summary: 'Return profile user',
          description: '',
          security: [{ bearerAuth: [] }],
          response: 200,
        },
      },
      profileUsersControllers,
    )
}
