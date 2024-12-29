import React from 'react'
import LoginPage from '@/login/LoginPage.tsx'
import MainPage from '@/main/MainPage.tsx'
import { useAuth } from '@/state/AuthProvider.tsx'

const App = () => {
  const { isLoginned } = useAuth()

  return (
    isLoginned ? <MainPage/> : <LoginPage/>
  )
}

export default App
