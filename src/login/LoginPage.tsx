import React, { useState } from 'react'
import LoginButton from '@/login/components/LoginButton.tsx'
import QRCodeView from '@/login/components/QRCodeView.tsx'
import '@/login/styles/login-page.scss'
import axios from 'axios'

interface QRCodeResponse {
  qr_code: string
}

const LoginPage = () => {
  const [qrCodePayload, setQrCodePayload] = useState<string>('')

  const handleLoginButton = async () => {
    axios.post<QRCodeResponse>('http://45.9.74.253:8080/auth', {
      redirect_uri: 'https://google.com/',
      scope: 'basic,phone'
    })
      .then(({ data }) => {
        setQrCodePayload(data.qr_code)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="start-page-container">
      <h1 className="title">EduPlatform</h1>
      <h2 className="subtitle">Образовательная платформа</h2>

      {qrCodePayload !== '' ? <QRCodeView qrCodePayload={qrCodePayload}/> : <LoginButton action={handleLoginButton}/>}
    </div>
  )
}

export default LoginPage
