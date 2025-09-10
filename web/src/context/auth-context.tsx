import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { signIn as signInApi } from '@/api/users-api/sign-in'

interface AuthContextType {
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'))

  const login = async (email: string, password: string) => {
    const token = await signInApi({ email, password })
    localStorage.setItem('token', token)
    setToken(token)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
