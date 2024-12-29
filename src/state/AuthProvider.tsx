import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AuthProvider {
  isLoginned: boolean
  firstName: string | null
  lastName: string | null
  login: (firstName: string, lastName: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthProvider | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoginned, setIsLoginned] = useState(false)
  const [firstName, setFirstName] = useState<string | null>(null)
  const [lastName, setLastName] = useState<string | null>(null)

  const login = (firstName: string, lastName: string) => {
    setIsLoginned(true)
    setFirstName(firstName)
    setLastName(lastName)
  }

  const logout = () => {
    setIsLoginned(false)
    setFirstName(null)
    setLastName(null)
  }

  return (
    <AuthContext.Provider value={{ isLoginned, firstName, lastName, login, logout }}>
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
