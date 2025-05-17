import type { Request, Response } from 'express'

export class AuthController {
  static login(req: Request, res: Response) {
    res.send({ msg: 'Login' })
  }

  static register(req: Request, res: Response) {
    res.send({ msg: 'Register' })
  }
}
