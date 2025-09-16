import { type ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/context/auth-context'

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
