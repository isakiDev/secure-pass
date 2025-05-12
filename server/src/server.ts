import { AppRoute } from './routes/app.route.ts'

interface Options {
  port: number
  app: any
}

export class Server {
  private readonly port: number
  private readonly app: any

  constructor(options: Options) {
    const { app, port } = options
    this.app = app
    this.port = port
  }

  init() {
    this.app.register(AppRoute.init)
    this.app.listen({ port: this.port })
  }
}
