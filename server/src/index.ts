import fastify from 'fastify'
import ajvErrors from 'ajv-errors'

import { errorHandler } from './handlers/errors.handler.ts'
import { Server } from './server.ts'

const app = fastify({
  ajv: {
    customOptions: {
      $data: true,
      allErrors: true,
    },
    plugins: [ajvErrors],
  },
})

app.setErrorHandler(errorHandler())

const server = new Server({
  app,
  port: 3000,
})
server.init()
