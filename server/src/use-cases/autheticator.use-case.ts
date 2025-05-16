import { authenticator } from 'otplib'

interface GenerateOtpAuthParams {
  email: string
  appName: string
  secret: string
}

export class AuthenticatorUseCase {
  static get generateSecret() {
    const secret = authenticator.generateSecret()
    return secret
  }

  static check({ token, secret }: { token: string; secret: string }) {
    const isValid = authenticator.check(token, secret)
    return isValid
  }

  static generateOtpauth({ email, appName, secret }: GenerateOtpAuthParams) {
    const otpauth = authenticator.keyuri(email, appName, secret)
    return otpauth
  }
}
