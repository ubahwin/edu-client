import React from 'react'
import LoginPage from '@/login/LoginPage.tsx'
import MainPage from '@/main/MainPage.tsx'
import { useAuth } from '@/state/AuthProvider.tsx'

const App = () => {
  const { isLoginned } = useAuth()
  // const isLoginned = true

  return (
    isLoginned ? <MainPage/> : <LoginPage/>
  )
}

export default App
