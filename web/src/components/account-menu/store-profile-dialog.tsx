import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

// import { getProfile } from '@/api/services/profile-api/get-profile'
// import type { IGetProfileResponse } from '@/api/services/profile-api/types'
import { updateProfile } from '@/api/services/profile-api/update-profile'

import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { profileDialogFormSchema, type TprofileDialogForm } from './types'

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  // TODO CÓDIGO COMENTADO É PARA ATIVAR A MUTAÇÃO DA CONSULTA REACT!
  // ESTÁ FUNCIONANDO, SE FOR APROPRIADO PARA ESTA TELA, É SÓ DESCOMENTAR
  // O CÓDIGO É TOTALMENTE FUNCIONAL

  // const { data: getProfileFn } = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: getProfile,
  //   // staleTime: Infinity
  // })

  // function updateProfileCache({ name, email }: TprofileDialogForm) {
  //   const cached = queryClient.getQueryData<IGetProfileResponse>(['profile'])

  //   if (cached) {
  //     queryClient.setQueryData(['profile'], {
  //       ...cached,
  //       name,
  //       email,
  //     })
  //   }

  //   return { cached }
  // }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
    // onMutate({ name, email }) {
    //   const { cached } = updateProfileCache({ name, email })
    //   return { previousProfile: cached }
    // },

    // onError(_, __, context) {
    //   if (context?.previousProfile?.profile) {
    //     updateProfileCache(context.previousProfile.profile)
    //   }
    // },
  })

  const { register, handleSubmit } = useForm<TprofileDialogForm>({
    resolver: zodResolver(profileDialogFormSchema),
    // values: {
    //   name: getProfileFn?.name ?? '',
    //   email: getProfileFn?.email ?? '',
    // },
  })

  async function handleSubmitUpdateProfile(data: TprofileDialogForm) {
    try {
      await updateProfileFn({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      toast.success('Atualizado com sucesso!🔥')
    } catch {
      toast.error('Falha ao atualizar!❌')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar Perfil</DialogTitle>
        <DialogDescription>Preencha corretamente os campos</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleSubmitUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="flex flex-col gap-4">
            <Label className="" htmlFor="name">
              Nome
            </Label>
            <Input
              autoComplete="off"
              className=""
              id="name"
              type="name"
              {...register('name')}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label className="" htmlFor="email">
              E-mail
            </Label>
            <Input
              autoComplete="off"
              className=""
              id="email"
              type="email"
              {...register('email')}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label className="" htmlFor="password">
              Senha
            </Label>
            <Input
              autoComplete="off"
              className=""
              id="password"
              type="password"
              {...register('password')}
            />
          </div>
        </div>
        <DialogFooter className="mt-3 gap-5">
          <DialogClose asChild>
            <Button className="cursor-pointer" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" className="cursor-pointer">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
