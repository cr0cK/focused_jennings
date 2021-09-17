import * as React from 'react'
import { UserContext } from '../contextes/User'
import DeniedPage from '../Pages/DeniedPage'
import { logger } from '../utils/logger'
import { Routes } from './types'

interface IMyRouterProps {
  routes: Routes
}

const MyRouter: React.FC<IMyRouterProps> = props => {
  const userContext = React.useContext(UserContext)

  if (!userContext?.user) {
    return <DeniedPage />
  }

  const grantedRoutes = props.routes
    .filter(route => {
      return route.permissions.every(permissionRequired =>
        userContext.user.permissions.includes(permissionRequired)
      )
    })
    .reverse()

  logger.info(
    'Granted routes:',
    grantedRoutes.map(route => route.name)
  )

  const firstGrantedRoute = grantedRoutes.length > 0 && grantedRoutes[0]

  if (!firstGrantedRoute) {
    return <DeniedPage />
  }

  return (
    <div>
      <firstGrantedRoute.component />
    </div>
  )
}

export default MyRouter
