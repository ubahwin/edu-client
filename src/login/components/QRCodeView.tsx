import React, { useEffect, useRef } from 'react'
import '@/login/styles/qr-code-view.scss'
import vkQr from '@vkontakte/vk-qr'

interface QRCodeViewProps {
  qrCodePayload: string
}

const QRCodeView = ({ qrCodePayload }: QRCodeViewProps) => {
  const qrCodeRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (qrCodeRef.current !== null) {
      qrCodeRef.current.innerHTML = vkQr.createQR(qrCodePayload, {
        qrSize: 320,
        isShowLogo: false
      })
    }
  }, [])

  return (
    <div className="qr-container">
      <div className="qr-subcontainer">
        <span className="qr-title">
          Отсканируйте с помощью <span className="qr-title-vdovin-id">VdovinID</span>
        </span>

        <div className="qr-description-container">
          <span className="qr-description">Сайт получит эти разрешения:</span>
          <ul className="qr-description-ul">
            <li>Имя</li>
            <li>Фамилия</li>
            <li>Номер телефона</li>
          </ul>
        </div>
      </div>

      <svg className="qr-code" ref={qrCodeRef}></svg>
    </div>
  )
}

export default QRCodeView
