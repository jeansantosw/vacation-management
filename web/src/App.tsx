import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { routes } from './router/routes'
export function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={routes} />
    </>
  )
}
