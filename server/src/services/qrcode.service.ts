import qrcode, { type QRCodeStringType } from 'qrcode'

interface GenerateQrParams {
  otpauth: string
  type: QRCodeStringType
}

export class QrcodeService {
  generateQr({ otpauth, type }: GenerateQrParams) {
    return qrcode.toString(otpauth, { type }, (err, qr) => {
      if (err) throw Error('Cannot generate QR')
    })
  }
}
