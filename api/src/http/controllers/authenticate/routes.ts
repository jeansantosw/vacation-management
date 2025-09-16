import { authenticateUserDTOSchema } from '@/helpers/global-types/authenticate-types/types'
import type { FastifyInstance } from 'fastify'
import z from 'zod'
import { authenticateUsersControllers } from './authenticate-users-controllers'

// Authentication session
export async function appAuthenticateUsersRoutes(app: FastifyInstance) {
  app.post(
    '/sessions',
    {
      schema: {
        tags: ['Authenticate'],
        summary: 'User authentication session 🔓',
        body: authenticateUserDTOSchema,
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
