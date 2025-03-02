import React, { useEffect, useState } from 'react'
import LoginButton from '@/login/components/LoginButton.tsx'
import QRCodeView from '@/login/components/QRCodeView.tsx'
import '@/login/styles/login-page.scss'
import '@styles/error-page.scss'
import axios from 'axios'
import { useAuth } from '@/state/AuthProvider.tsx'

interface QRCodeResponse {
  qr_code: string
}

const LoginPage = () => {
  const [qrCodePayload, setQrCodePayload] = useState(null)
  const [error, setError] = useState(null)

  const { login } = useAuth()

  const handleLoginButton = async () => {
    axios.post<QRCodeResponse>('https://auth.qrauth.ru/auth', {
      redirect_uri: 'https://edu.qrauth.ru/token',
      scope: 'basic,phone'
    })
      .then(({ data }) => {
        setQrCodePayload(data.qr_code)
        openWebsocket(data.qr_code)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const openWebsocket = (path: string) => {
    const ws = new WebSocket(`wss://edu.qrauth.ru/ws/${path}`)

    // Открытие соединения и отправка параметра
    ws.onopen = () => {
      console.log('WebSocket соединение установлено')

      // Отправляем параметры на сервер
      const params = { scope: 'basic,phone' }
      ws.send(JSON.stringify(params))
    }

    // Получение сообщений от сервера
    ws.onmessage = (event) => {
      console.log(event.data)
      login(event.data, 'opoMa', 'INASD')
    }

    // Обработка ошибок соединения
    ws.onerror = (event) => {
      console.error('Ошибка WebSocket:', event)
      setError('Ошибка подключения к серверу WebSocket')
    }

    // Закрытие соединения
    ws.onclose = () => {
      console.log('WebSocket соединение закрыто')
    }

    // Очистка при размонтировании компонента
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close()
      }
    }
  }

  return (
    error !== null ? (
      <div className="error-page">
        <p>ERROR</p>
        <button onClick={() => setError(null)}>Попробовать ещё раз</button>
      </div>
    ) : (
      <div className="start-page-container">
        <h1 className="title">EduPlatform</h1>
        <h2 className="subtitle">Образовательная платформа</h2>

        {qrCodePayload !== null ? <QRCodeView qrCodePayload={qrCodePayload}/> : <LoginButton action={handleLoginButton}/>}
      </div>
    )
  )
}

export default LoginPage
