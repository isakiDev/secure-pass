import type { Request, Response } from 'express'
import { AuthService } from '../services/auth.service'

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login = (req: Request, res: Response) => {
    res.send({ msg: 'Login' })
  }

  register = (req: Request, res: Response) => {
    const qr = this.authService.register()

    console.log(qr)

    res.send({ msg: 'Register' })
  }
}
