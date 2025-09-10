import { LayoutDashboard, TreePalm } from 'lucide-react'

import { AccountMenu } from '../account-menu/account-menu'
import { NavLink } from '../nav-link/nav-link'

export function Header() {
  return (
    <div className="border-primary/50 dark:border-muted-foreground/10 border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <p className="font-bold dark:text-amber-50">
          Task<span className="text-primary">Flow</span> Ltda.
        </p>

        <nav className="ml-10 flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink to="/ferias">
            <TreePalm className="h-4 w-4" />
            Férias
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
