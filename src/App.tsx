import React, { useState } from 'react'
import LoginPage from '@pages/LoginPage.tsx'

const App = () => {
  const [isLoggined, setIsLoggined] = useState(false)

  const handleLoginComplete = () => {
    setIsLoggined(true)
  }

  return (
    isLoggined ? <div>HELLOW</div> : <LoginPage onComplete={handleLoginComplete}/>
  )
}

export default App
