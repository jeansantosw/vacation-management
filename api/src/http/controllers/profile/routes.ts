import { auth } from '@/http/middlewares/auth'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { profileUsersControllers } from './profile-user-controllers'
import { updateProfileSchema } from '@/helpers/global-types/profile-types/types'
import { updateProfileControllers } from './update-profile-controllers'

// Profile session
export async function appProfileUserRoutes(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/me',
      {
        schema: {
          tags: ['Profile'],
          summary: 'Return profile user.',
          description: 'This route returns authenticated user data.',
          security: [{ bearerAuth: [] }],
          response: 200,
        },
      },
      profileUsersControllers,
    )
}

export async function appUpdateProfileRoutes(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .put(
      '/profile',
      {
        schema: {
          tags: ['Profile'],
          summary: 'Update profile ✅',
          // description:
          //   'In the update route, pass only the fields that need to be changed. ⚠️ Note: If the role is a `collaborator`, a `manageId` must be passed.',
          security: [{ bearerAuth: [] }],
          body: updateProfileSchema,
          response: 204,
        },
      },
      updateProfileControllers,
    )
}
