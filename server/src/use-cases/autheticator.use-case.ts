import { type AuthenticatorService } from '../services/authenticator.service'

interface GenerateOtpAuthParams {
  email: string
  appName: string
  secret: string
}

export class AuthenticatorUseCase {
  constructor(private readonly authenticatorService: AuthenticatorService) {}

  get generateSecret() {
    const secret = this.authenticatorService.generateSecret
    return secret
  }

  check({ token, secret }: { token: string; secret: string }) {
    const isValid = this.authenticatorService.check({ token, secret })
    return isValid
  }

  generateOtpauth({ email, appName, secret }: GenerateOtpAuthParams) {
    const otpauth = this.authenticatorService.generateOtpauth({
      email,
      appName,
      secret,
    })
    return otpauth
  }
}
