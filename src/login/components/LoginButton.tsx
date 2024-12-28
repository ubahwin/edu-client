import React from 'react'
import '@/login/styles/login-button.scss'
import qrcodick from '@assets/qr-mock.jpg'

interface LoginButtonInterface {
  action: () => void
}

const LoginButton = ({ action }: LoginButtonInterface) => {
  return (
    <button className="login-button" onClick={action}>
      <img className="qrcodick" src={qrcodick} alt="qrcodick"/>
      <span className="login-button-title">Войти через VdovinID</span>
    </button>
  )
}

export default LoginButton
