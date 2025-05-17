import express, { Router } from 'express'

interface Options {
  port: number
  routes: Router
}

export class Server implements Options {
  public readonly app = express()

  public readonly port: number
  public readonly routes: Router

  constructor(options: Options) {
    const { routes, port } = options

    this.routes = routes
    this.port = port
  }

  init() {
    //routes
    this.app.use('/api/v1', this.routes)

    this.app.listen({ port: this.port })
  }
}
