import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { queryClient } from './api/react-query'
import { routes } from './router/routes'
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      <RouterProvider router={routes} />
    </QueryClientProvider>
  )
}
