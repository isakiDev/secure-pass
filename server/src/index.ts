import express from 'express'

import { Server } from './server.ts'
import { AppRoute } from './routes/app.route.ts'

const port = 3000

const server = new Server({ port, routes: AppRoute.routes })

server.init()
