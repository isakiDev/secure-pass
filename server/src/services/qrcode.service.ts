import qrcode, { QRCodeStringType } from 'qrcode'

interface GenerateQrParams {
  otpauth: string
  type: QRCodeStringType
}

export class QrcodeService {
  generateQr({ otpauth, type }: GenerateQrParams) {
    return qrcode
  }
}
