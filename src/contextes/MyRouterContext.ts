import * as React from 'react'

export const MyRouterContext = React.createContext<{
  currentPathname: string
} | null>(null)
