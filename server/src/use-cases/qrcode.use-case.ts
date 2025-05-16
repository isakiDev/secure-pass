import qrcode, { QRCodeStringType } from 'qrcode'

interface GenerateQrParams {
  otpauth: string
  type: QRCodeStringType
}

export class QrcodeUseCase {
  static generateQr({ otpauth, type }: GenerateQrParams) {
    return qrcode.toString(otpauth, { type })
  }
}
