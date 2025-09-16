import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { UserRoundPen, UserRoundX } from 'lucide-react'
import { toast } from 'sonner'

import { getProfile } from '@/api/services/profile-api/get-profile'
import { deleteUsers } from '@/api/services/users-api/delete-users'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import type { IUserTableRow } from '../types'
import { UserDetails } from './user-datails'
import { UserUpdate } from './user-update/user-update'

export function UserTableRow({ user }: IUserTableRow) {
  const queryClient = useQueryClient()

  const { data: getProfileFn } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  const { mutate: deleteUserFn } = useMutation({
    mutationFn: (userId: string) => deleteUsers(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      toast.success('Usuário excluído com sucesso!')
    },
    onError: () => {
      toast.error('Falha ao excluir o usuário.')
    },
  })

  function handleDeleteUser() {
    deleteUserFn(user.id)
  }

  return (
    <Dialog>
      <TableRow>
        <TableCell>
          <UserDetails userId={user.id} />
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">
          {user.id}
        </TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            <span>Pendente</span>
          </div>
        </TableCell>
        <TableCell>
          <DialogTrigger asChild>
            <Button size="sm">
              <UserRoundPen className="h-3 w-3" />
              Editar
            </Button>
          </DialogTrigger>
          <UserUpdate userId={user.id} />
        </TableCell>
        {getProfileFn?.role === 'admin' && (
          <TableCell>
            <Button onClick={handleDeleteUser} variant="destructive" size="sm">
              <UserRoundX className="h-3 w-3" />
              Deletar
            </Button>
          </TableCell>
        )}
      </TableRow>
    </Dialog>
  )
}
