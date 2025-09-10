import { Outlet } from 'react-router-dom'

// import imageSignin from '@/assets/imageSignin.svg'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="border-foreground/5 text-muted-foreground flex h-full flex-col justify-between border-r bg-neutral-200 p-10">
        <div className="text-foreground flex items-center gap-3 text-lg">
          <p className="text-2xl font-bold dark:text-amber-50">
            Task<span className="text-blue-400">Flow</span> Ltda.
          </p>
        </div>
        <h1 className="text-4xl font-semibold">Gestão de Férias</h1>
        <footer className="text-sm">
          Painel do sistema &copy; TaskFlow Ltda. -{' '}
          {new Date().getFullYear()}{' '}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
