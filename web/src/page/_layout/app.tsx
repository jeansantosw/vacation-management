import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header/header'

export function AppLayout() {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   const interceptorId = api.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (isAxiosError(error)) {
  //         const status = error.response?.status
  //         const code = error.response?.data.code // code retornado pelo backend.

  //         if (status === 401 && code === 'UNAUTHORIZED') {
  //           navigate('/sign-in', { replace: true })
  //         } else {
  //           throw error
  //         }
  //       }
  //     },
  //   )

  //   return () => {
  //     api.interceptors.response.eject(interceptorId)
  //   }
  // }, [navigate])

  return (
    <div className="felx min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
