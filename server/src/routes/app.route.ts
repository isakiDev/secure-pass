import { Router } from 'express'

import { AuthRoute } from './auth.route.ts'

export class AppRoute {
  static get routes() {
    const router = Router()

    router.use('/auth', AuthRoute.routes)

    return router
  }
}
