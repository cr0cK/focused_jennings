import * as React from 'react'
import MyRouter from '../MyRouter'
import { Permission, RouteName } from '../MyRouter/types'
import AdminRolesPage from './AdminRolesPage'
import AdminUsersPage from './AdminUsersPage'

interface IAdminPageProps {}

const AdminPage: React.FC<IAdminPageProps> = props => {
  return (
    <>
      <p>AdminPage</p>

      <MyRouter
        routes={[
          {
            name: RouteName.AdminUsersPage,
            pathname: '/admin/users',
            permissions: [Permission.adminReadUsers],
            component: AdminUsersPage
          },
          {
            name: RouteName.AdminRolesPage,
            pathname: '/admin/roles',
            permissions: [Permission.adminReadRoles],
            component: AdminRolesPage
          }
        ]}
      />
    </>
  )
}

export default AdminPage
