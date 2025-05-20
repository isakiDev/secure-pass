import { AuthenticatorUseCase } from '../use-cases/autheticator.use-case'
import { QrcodeUseCase } from '../use-cases/qrcode.use-case'
import { AuthenticatorService } from './authenticator.service'
import { QrcodeService } from './qrcode.service'

const authenticatorService = new AuthenticatorService()
const authenticatorUseCase = new AuthenticatorUseCase(authenticatorService)

const qrCodeService = new QrcodeService()
const qrCodeUseCase = new QrcodeUseCase(qrCodeService)

export class AuthService {
  login(code: string) {
    const data = {
      token: '',
      secret: '',
    }

    const isValidCode = authenticatorUseCase.check(data)
  }

  register() {
    const data = {
      email: 'test@gmail.com',
      appName: 'SECURE_PASS',
    }

    const secretKey = authenticatorUseCase.generateSecret

    console.log({ secretKey })

    const generatedOtpauth = authenticatorUseCase.generateOtpauth({
      ...data,
      secret: secretKey,
    })

    const qr = qrCodeUseCase.generateQr({
      otpauth: generatedOtpauth,
      type: 'terminal',
    })

    return qr
  }
}
