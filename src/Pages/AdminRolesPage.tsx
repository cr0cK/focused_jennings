import * as React from 'react'
import MyRouter from '../MyRouter'
import { Permission, RouteName } from '../MyRouter/types'
import AdminRolesEditPage from './AdminRolesEditPage'
import AdminRolesListPage from './AdminRolesListPage'

interface IAdminRolesPageProps {}

const AdminRolesPage: React.FC<IAdminRolesPageProps> = props => {
  return (
    <>
      <p>AdminRolesPage</p>

      <MyRouter
        routes={[
          {
            name: RouteName.AdminRolesListPage,
            pathname: '/admin/roles/list',
            permissions: [],
            component: AdminRolesListPage
          },
          {
            name: RouteName.AdminRolesEditPage,
            pathname: '/admin/roles/edit',
            permissions: [Permission.adminEditRoles],
            component: AdminRolesEditPage
          }
        ]}
      />
    </>
  )
}

export default AdminRolesPage
