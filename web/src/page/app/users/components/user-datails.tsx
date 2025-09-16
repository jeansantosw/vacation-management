import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"
import { useQuery } from '@tanstack/react-query';
import { getUserDetails } from "@/api/services/users-api/get-user-details";
import type { IGetUserDetails } from "@/api/services/users-api/types";
import { useState } from "react";


export function UserDetails(userId: IGetUserDetails) {
  const [open, setOpen] = useState(false)

  const { data: getUserDetailsFn } = useQuery({
    queryKey: ['user-details', userId],
    queryFn: () => getUserDetails(userId),
    enabled: open
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do usuário</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Detalhes do usuário
        </DialogTitle>
        <DialogHeader className="mb-3">
          <span className="text-primary/80 font-semibold tracking-tight">
            <span className="text-muted-foreground pr-1">
              {getUserDetailsFn?.name}
            </span>
          </span>
        </DialogHeader>
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Cargo
                </TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground font-medium uppercase">
                      {getUserDetailsFn?.role}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Férias
                </TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                    <span>Pendente</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  E-mail
                </TableCell>
                <TableCell className="flex justify-end">
                  {getUserDetailsFn?.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  Não informado
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Manager
                </TableCell>
                <TableCell className="flex justify-end">
                  {getUserDetailsFn?.managerId ?? '-'}

                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}