import fastify from 'fastify'

import { Server } from './server.ts'

const app = fastify()

const server = new Server({
  app,
  port: 3000,
})
server.init()
