
import { ChevronDown, LogOut } from 'lucide-react'

import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { useAuth } from '@/context/auth-context'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/users-api/get-profile'

export function AccountMenu() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/sign-in')
  }

  const { data: getProfileFn } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 select-none"
          >
            {getProfileFn?.name}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            <span className="uppercase">{getProfileFn?.role}</span>
            <span className="text-muted-foreground text-xs font-normal">
              {getProfileFn?.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            asChild

            className="text-rose-500 dark:text-rose-400"
          >
            <button onClick={handleLogout} className="w-full">
              <LogOut className="mr-2 h-4 w-4 text-rose-500 dark:text-rose-400" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  )
}
