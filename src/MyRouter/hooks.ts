import * as React from 'react'
import { logger } from '../utils/logger'

export interface UseMyRouterOutput {
  currentPathname: string
}

export function useMyRouter(): UseMyRouterOutput {
  const [currentPathname, setCurrentPathname] = React.useState(
    document.location.pathname
  )

  function handleOnPopState(e: PopStateEvent) {
    setCurrentPathname(e.state.to)
  }

  React.useEffect(() => {
    window.onpopstate = handleOnPopState

    return () => {
      window.onpopstate = null
    }
  }, [])

  logger.info('[useMyRouter] CurrentPathname:', currentPathname)

  return {
    currentPathname
  }
}
