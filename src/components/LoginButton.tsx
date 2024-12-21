import React from 'react'
import '@styles/components/login-button.scss'

interface LoginButtonInterface {
  action: () => void
}

const LoginButton = ({ action }: LoginButtonInterface) => {
  return (
    <button className="login-button" onClick={action}>
      <img className="qrcodick" src="src/assets/qr-mock.jpg" alt="qrcodick"/>
      <span className="login-button-title">Войти через VdovinID</span>
    </button>
  )
}

export default LoginButton