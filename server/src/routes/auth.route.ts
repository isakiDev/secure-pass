import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.ts'
import { AuthService } from '../services/auth.service.ts'

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
