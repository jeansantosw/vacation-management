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
