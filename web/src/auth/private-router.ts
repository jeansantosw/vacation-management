import { useEffect, type ReactNode } from 'react'
import { useAuth } from '@/context/auth-context'
import { useNavigate } from 'react-router-dom'

export function PrivateRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in', { replace: true })
    }

  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null 
  }

  return children
}
