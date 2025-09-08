import fastify from 'fastify'
import { appCreateUsersRoutes, appGetUsersRoutes } from './http/routes'
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

if (env.NODE_ENV === 'development') {
  server.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Gestão de férias',
        version: '0.0.0',
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

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.register(appGetUsersRoutes)
server.register(appCreateUsersRoutes)

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
