// import { useMutation, useQuery } from '@tanstack/react-query'
import { ChevronDown, LogOut } from 'lucide-react'

// import { useNavigate } from 'react-router-dom'
// import { signOut } from '@/api/http/services/auth/sign-out'
// import { getManagedCommercialStore } from '@/api/http/services/commercial-store/get-managed-commercial-store'
// import { getProfile } from '@/api/http/services/profile/get-profile'
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
// import { Skeleton } from '../ui/skeleton'
// import { CommercialStoreProfileDialog } from './commercial-store-profile-dialog'

export function AccountMenu() {
  // const navigate = useNavigate()

  // const { data: profile } = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: getProfile,
  //   staleTime: Infinity,
  // })

  // const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
  //   mutationKey: ['sign-out'],
  //   mutationFn: signOut,
  //   onSuccess: () => {
  //     navigate('/sign-in', { replace: true })
  //   },
  // })

  // const {
  //   data: managedCommercialStore,
  //   isLoading: isLoadingManagedCommercialStore,
  // } = useQuery({
  //   queryKey: ['managed-commercial-store'],
  //   queryFn: getManagedCommercialStore,
  //   staleTime: Infinity,
  // })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 select-none"
          >
            {/* {isLoadingManagedCommercialStore ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              managedCommercialStore?.name
            )} */}
            Jean Santos
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            <span>Manager</span>
            <span className="text-muted-foreground text-xs font-normal">
              jeans@arvox.com
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DialogTrigger asChild>
            <DropdownMenuItem>
              <className="mr-2 h-4 w-4" />
              <span>Perfil do usuário</span>
            </DropdownMenuItem>
          </DialogTrigger> */}
          <DropdownMenuItem
            asChild
            // disabled={isSigningOut}
            className="text-rose-500 dark:text-rose-400"
          >
            <button className="w-full">
              <LogOut className="mr-2 h-4 w-4 text-rose-500 dark:text-rose-400" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <CommercialStoreProfileDialog /> */}
    </Dialog>
  )
}
