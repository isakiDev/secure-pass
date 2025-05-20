import { type QRCodeStringType } from 'qrcode'
import { type QrcodeService } from '../services/qrcode.service'

interface GenerateQrParams {
  otpauth: string
  type: QRCodeStringType
}

export class QrcodeUseCase {
  constructor(private readonly qrcodeService: QrcodeService) {}

  generateQr = ({ otpauth, type }: GenerateQrParams) => {
    return this.qrcodeService.generateQr({ otpauth, type })
  }
}
