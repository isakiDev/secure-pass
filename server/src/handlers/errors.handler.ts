import fastify from 'fastify'

const fastifyModule = fastify

type Fastify = ReturnType<typeof fastifyModule>

export const errorHandler =
  () => (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    if (error.validation) {
      const errors = error.validation.map((err) => ({
        field:
          err.instancePath?.replace(/^\//, '') ||
          err.params?.missingProperty ||
          '',
        message: err.message,
      }))

      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Validation failed',
        errors,
      })
    }

    reply.send(error)
  }
