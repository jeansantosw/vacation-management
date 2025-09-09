import fastify from 'fastify'
import {
  appAuthenticateUsersRoutes,
  appCreateUsersRoutes,
  appGetUserRoutes,
  appGetUsersRoutes,
  appProfileUserRoutes,
  appUpdateUserRoutes,
} from './http/controllers/users/routes'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env'
import fastifySwagger from '@fastify/swagger'
// import scalarAPIReference from '@scalar/fastify-api-reference'
import fastifySwaggerUi from '@fastify/swagger-ui'
import z, { ZodError } from 'zod'
import fastifyJwt from '@fastify/jwt'

export const server = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
}).withTypeProvider<ZodTypeProvider>()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

if (env.NODE_ENV === 'development') {
  server.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'TaskFlow Ltda.',
        description: 'Sistema de Gestão de Férias',
        version: '0.0.0',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    transform: jsonSchemaTransform,
  })

  server.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  })

  // server.register(scalarAPIReference, {
  //   routePrefix: '/docs',
  // })
}

// User routes
server.register(appAuthenticateUsersRoutes)
server.register(appProfileUserRoutes)
server.register(appCreateUsersRoutes)
server.register(appGetUsersRoutes)
server.register(appGetUserRoutes)
server.register(appUpdateUserRoutes)

server.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation', issues: z.treeifyError(error) })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: sistema de observabilidade
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
