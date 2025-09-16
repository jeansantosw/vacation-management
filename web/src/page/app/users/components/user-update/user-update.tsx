import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  type TUpdateUser,
  updateUserSchema,
} from '@/api/services/users-api/types'
import { updateUsers } from '@/api/services/users-api/update-user'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function UserUpdate({ userId }: { userId: string }) {
  const queryClient = useQueryClient()
  const { register, handleSubmit, reset } = useForm<TUpdateUser>({
    resolver: zodResolver(updateUserSchema),
  })

  const { mutateAsync: updateUsersFn } = useMutation({
    mutationFn: (data: TUpdateUser) => updateUsers(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  async function handleSubmitUpdateUser(data: TUpdateUser) {
    try {
      await updateUsersFn(data)
      toast.success('Usuário atualizado🔥')
      reset()
    } catch {
      toast.error('Falha ao atualizar!❌')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar Usuário</DialogTitle>
        <DialogDescription>Preencha corretamente os campos</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleSubmitUpdateUser)}>
        <div className="space-y-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Nome</Label>
            <Input
              autoComplete="off"
              id="name"
              type="name"
              {...register('name')}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">E-mail</Label>
            <Input
              autoComplete="off"
              id="email"
              type="email"
              {...register('email')}
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
            salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
