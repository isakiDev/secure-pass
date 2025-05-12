import qrcode, { QRCodeStringType } from 'qrcode'

interface IGenerateQr {
  otpauth: string
  type: QRCodeStringType
}

export class QrcodeUseCase {
  static generateQr({ otpauth, type }: IGenerateQr) {
    return qrcode.toString(otpauth, { type })
  }
}
