import type { Request, Response } from 'express'
import { AuthService } from '../services/auth.service.ts'

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login(req: Request, res: Response) {
    res.send({ msg: 'Login' })
  }

  register(req: Request, res: Response) {
    // return this.authService.register()
    const qr = this.authService.register()

    console.log(qr)

    res.send({ msg: 'Register' })
  }
}
