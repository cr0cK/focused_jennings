import * as React from 'react'
import MyRouter from '../MyRouter'
import { Permission, RouteName } from '../MyRouter/types'
import AdminUsersEditPage from './AdminUsersEditPage'
import AdminUsersListPage from './AdminUsersListPage'

interface IAdminUsersPageProps {}

const AdminUsersPage: React.FC<IAdminUsersPageProps> = props => {
  return (
    <>
      <p>AdminUsersPage</p>

      <MyRouter
        routes={[
          {
            name: RouteName.AdminUsersListPage,
            pathname: '/admin/users/list',
            permissions: [],
            component: AdminUsersListPage
          },
          {
            name: RouteName.AdminUsersEditPage,
            pathname: '/admin/users/edit',
            permissions: [Permission.adminEditUsers],
            component: AdminUsersEditPage
          }
        ]}
      />
    </>
  )
}

export default AdminUsersPage
