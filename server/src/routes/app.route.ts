import { AuthRoute } from './auth.route.ts'

export class AppRoute {
  static init(app: any) {
    app.register(AuthRoute.routes)
  }
}
