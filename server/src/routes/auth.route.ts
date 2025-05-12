import { AuthController } from '../controllers/auth.controller.ts'

export class AuthRoute {
  static routes(app: any) {
    app.get('/login', AuthController.login)
    app.get('/register', AuthController.register)
  }
}
