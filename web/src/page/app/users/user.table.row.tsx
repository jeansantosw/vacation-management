import { Search, UserRoundPen, UserRoundX } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

import type { IUserTableRow } from './types'

export function UserTableRow({ user }: IUserTableRow) {
  return (
    <TableRow>
      <TableCell>
        <Button>
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do usuário</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">{user.id}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neutral-800" />
          <span>Pendente</span>
        </div>
      </TableCell>
      <TableCell>
        <Button size="sm">
          <UserRoundPen className="h-3 w-3" />
          Editar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="destructive" size="sm">
          <UserRoundX className="h-3 w-3" />
          Deletar
        </Button>
      </TableCell>
    </TableRow>
  )
}
