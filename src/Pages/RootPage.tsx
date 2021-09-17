import * as React from 'react'
import MyRouter from '../MyRouter'
import { Permission, RouteName } from '../MyRouter/types'
import AdminPage from './AdminPage'
import DashboardPage from './DashboardPage'

interface IRootPageProps {}

const RootPage: React.FunctionComponent<IRootPageProps> = props => {
  return (
    <>
      <p>RootPage</p>

      <MyRouter
        routes={[
          {
            name: RouteName.DashboardPage,
            pathname: '/dashboard',
            permissions: [Permission.isLogged, Permission.readDashboard],
            component: DashboardPage
          },
          {
            name: RouteName.AdminPage,
            pathname: '/admin',
            permissions: [Permission.isLogged, Permission.isAdmin],
            component: AdminPage
          }
        ]}
      />
    </>
  )
}

export default RootPage
