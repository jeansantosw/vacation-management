// import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

// import { signIn } from '@/api/http/services/auth/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { TSigninForm } from './types'

export function SignIn() {
  // const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSigninForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  // const { mutateAsync: authenticate } = useMutation({
  //   mutationFn: signIn,
  // })

  async function handleSignin({ email, password }: TSigninForm) {
    try {
      console.log('####: ', email, password)
      // await authenticate({ email })
      toast.success('Login bem-sucedido 🔓')

      // await new Promise((resolve) => setTimeout(resolve, 4000)) // Apenas para simular o tempo de envio do email
      // navigate('/')
    } catch {
      toast.error('Credenciais inválidas ❌')
    }
  }

  return (
    <div className="p-8">
      <div className="flex w-80 flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar o painel
          </h1>
          <p className="text-muted-foreground text-xs">
            Acompanhe os registros dos seus funcionários
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleSignin)}
          className="w-full space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Digite seu e-mail</Label>
            <Input
              id="email"
              type="email"
              autoComplete="off"
              {...register('email')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Digite sua senha</Label>
            <Input
              id="password"
              type="password"
              autoComplete="off"
              {...register('password')}
            />
          </div>
          <Button disabled={isSubmitting} className="mt-2 w-full" type="submit">
            Acessar painel
          </Button>
          {/* <Button asChild className="w-full" variant="link">
            <Link to="/sign-up">Cadastrar novo estabelecimento</Link>
          </Button> */}
        </form>
      </div>
    </div>
  )
}
