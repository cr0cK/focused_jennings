import * as React from 'react'
import { MyRouterContext } from '../contextes/MyRouterContext'
import { UserContext } from '../contextes/UserContext'
import DeniedPage from '../Pages/DeniedPage'
import { logger } from '../utils/logger'
import { Routes } from './types'

interface IMyRouterProps {
  routes: Routes
}

const MyRouter: React.FC<IMyRouterProps> = props => {
  const userContext = React.useContext(UserContext)
  const myRouterContext = React.useContext(MyRouterContext)

  if (!userContext?.user || !myRouterContext?.currentPathname) {
    return <DeniedPage />
  }

  const sortedRoutes = props.routes.sort((a, b) =>
    a.pathname.length < b.pathname.length ? 1 : -1
  )

  // Keep routes that match the current pathname
  const matchedRoutes = sortedRoutes.filter(route => {
    return myRouterContext.currentPathname.startsWith(route.pathname)
  })

  logger.info(
    '[MyRouter] Matched routes:',
    matchedRoutes.map(route => route.name)
  )

  if (!matchedRoutes.length) {
    return null
  }

  // Get granted routes
  const grantedRoutes = matchedRoutes
    .filter(route => {
      return route.permissions.every(permissionRequired =>
        userContext.user.permissions.includes(permissionRequired)
      )
    })
    .reverse()

  logger.info(
    '[MyRouter] Granted routes:',
    grantedRoutes.map(route => route.name)
  )

  const firstGrantedRoute = grantedRoutes.length > 0 && grantedRoutes[0]

  if (!firstGrantedRoute) {
    return <DeniedPage />
  }

  logger.info('[MyRouter] Render:', firstGrantedRoute.component.name)

  return (
    <div>
      <firstGrantedRoute.component />
    </div>
  )
}

export default MyRouter
