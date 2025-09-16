import { createBrowserRouter } from 'react-router-dom'

import { PrivateRoute } from '@/auth/private-router'
import { AppLayout } from '@/page/_layout/app'
import { AuthLayout } from '@/page/_layout/auth'
import { NotFound } from '@/page/404'
import { Dashboard } from '@/page/app/dashboard'
import { SignIn } from '@/page/auth/sign-in'
import { Error } from '@/page/error'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
