import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>

      <span className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-primary font-semibold tracking-tight">
          dashboard
        </Link>
      </span>
    </div>
  )
}
