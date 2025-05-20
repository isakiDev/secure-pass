import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller'
import { AuthService } from '../services/auth.service'

const authService = new AuthService()
const authController = new AuthController(authService)

export class AuthRoute {
  static get routes() {
    const router = Router()

    router.post('/login', authController.login)
    router.post('/register', authController.register)

    return router
  }
}
