import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/main.scss'
import App from '@/App.tsx'
import { AuthProvider } from '@/state/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <App/>
  </AuthProvider>
)
