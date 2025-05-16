import { AuthController } from '../controllers/auth.controller.ts'
import { LoginSchema } from '../schemas/login.schema.ts'
import { RegisterSchema } from '../schemas/register.schema.ts'

export class AuthRoute {
  static routes(app: any) {
    app.post('/login', { schema: { body: LoginSchema } }, AuthController.login)
    app.post(
      '/register',
      { schema: { body: RegisterSchema } },
      AuthController.register,
    )
  }
}
