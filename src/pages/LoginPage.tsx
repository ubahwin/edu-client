import React, { useState } from 'react'
import LoginButton from '@components/LoginButton.tsx'
import QRCodeView from '@components/QRCodeView.tsx'
import '@styles/pages/login-page.scss'

interface StartPageInterface {
  onComplete: () => void
}

const LoginPage = ({ onComplete }: StartPageInterface) => {
  const [isTapped, setIsTapped] = useState(false)

  const handleLoginButton = () => {
    setIsTapped(true)
  }

  return (
    <div className="start-page-container">
      <h1 className="title">EduPlatform</h1>
      <h2 className="subtitle">Образовательная платформа</h2>

      {isTapped ? <QRCodeView/> : <LoginButton action={handleLoginButton}/>}
    </div>
  )
}

export default LoginPage
