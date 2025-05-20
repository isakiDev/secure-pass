import { Server } from './server'
import { AppRoute } from './routes/app.route'

const port = 3000

const server = new Server({ port, routes: AppRoute.routes })

server.init()
