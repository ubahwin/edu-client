import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AuthProvider {
  eduAccessToken: string
  isLoginned: boolean
  firstName: string | null
  lastName: string | null
  login: (eduAccessToken: string, firstName: string, lastName: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthProvider | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [eduAccessToken, setEduAccessToken] = useState<string | null>(null)
  const [isLoginned, setIsLoginned] = useState(false)
  const [firstName, setFirstName] = useState<string | null>(null)
  const [lastName, setLastName] = useState<string | null>(null)

  const login = (eduAccessToken: string, firstName: string, lastName: string) => {
    setEduAccessToken(eduAccessToken)
    setFirstName(firstName)
    setLastName(lastName)
    setIsLoginned(true)
  }

  const logout = () => {
    setIsLoginned(false)
    setEduAccessToken(null)
    setFirstName(null)
    setLastName(null)
  }

  return (
    <AuthContext.Provider value={{ eduAccessToken, isLoginned, firstName, lastName, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthProvider => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
