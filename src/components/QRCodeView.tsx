import React, {useEffect, useRef} from 'react'
import '@styles/components/qr-code-view.scss'
import vkQr from '@vkontakte/vk-qr'

const QRCodeView = () => {
  const qrCodeRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (qrCodeRef.current !== null) {
      qrCodeRef.current.innerHTML = vkQr.createQR('Text to encode', {
        qrSize: 256,
        isShowLogo: false
      })
    }
  }, [])

  return (
    <div className="qr-container">
      <div>
        <span className="qr-title">
          Отсканируйте с помощью <span className="qr-title-vdovin-id">VdovinID</span>
        </span>
        <div className="qr-divider"></div>
        <div className="qr-description-container">
          <span className="qr-description">Сайт получит эти разрешения:</span>
          <ul className="qr-description-ul">
            <li>Имя</li>
            <li>Фамилия</li>
            <li>Почта</li>
          </ul>
        </div>
      </div>

      <svg className="qr-code" ref={qrCodeRef}></svg>
    </div>
  )
}

export default QRCodeView
