import { Link, useLocation } from 'react-router-dom'

import type { TNavLink } from './types'

export function NavLink(props: TNavLink) {
  const { pathname } = useLocation()
  const isCurrentLink = pathname === props.to

  return (
    <Link
      data-current={isCurrentLink}
      {...props}
      className="dark:data-[current=true]:hover:text-primary text-muted-foreground hover:text-primary/80 dark:hover:text-muted-foreground/50 data-[current=true]:text-primary flex items-center gap-1.5 text-sm font-medium"
    />
  )
}
