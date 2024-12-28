import React, { useState } from 'react'
import LoginPage from '@/login/LoginPage.tsx'
import MainPage from '@/main/MainPage.tsx'

const App = () => {
  const [isLoggined, setIsLoggined] = useState(true)

  const handleLoginComplete = () => {
    setIsLoggined(true)
  }

  return (
    isLoggined ? <MainPage/> : <LoginPage onComplete={handleLoginComplete}/>
  )
}

export default App
