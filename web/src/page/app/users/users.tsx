import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@/api/services/users-api/get-users'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { UserTableRow } from './user.table.row'

export function Users() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>

        <div className="space-y-2.5">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-64">Identificador</TableHead>
                  <TableHead className="w-56">E-mail</TableHead>
                  <TableHead className="w-48">Nome</TableHead>
                  <TableHead className="w-44">Cargo</TableHead>
                  <TableHead className="w-36">Férias</TableHead>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-16"></TableHead>
                </TableRow>
              </TableHeader>
              {isLoading ? (
                <TableBody>
                  <TableRow>
                    <td colSpan={8} className="p-4 text-center">
                      Carregando usuários...
                    </td>
                  </TableRow>
                </TableBody>
              ) : (
                <TableBody>
                  {users && users.length > 0 ? (
                    users.map((user) => (
                      <UserTableRow key={user.id} user={user} />
                    ))
                  ) : (
                    <TableRow>
                      <td colSpan={8} className="p-4 text-center">
                        Nenhum usuário encontrado.
                      </td>
                    </TableRow>
                  )}
                </TableBody>
              )}
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
