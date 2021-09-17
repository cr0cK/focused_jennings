import * as React from 'react'
import MyRouter from '../MyRouter'
import { Permission, RouteName } from '../MyRouter/types'
import AdminUsersEditPage from './AdminUsersEditPage'
import AdminUsersListPage from './AdminUsersListPage'
import AdminUsersPage from './AdminUsersPage'

interface IAdminPageProps {}

const AdminPage: React.FunctionComponent<IAdminPageProps> = props => {
  return (
    <>
      <p>AdminPage</p>

      <MyRouter
        routes={[
          {
            name: RouteName.AdminUsersPage,
            pathname: '/admin/users',
            permissions: [
              Permission.isLogged,
              Permission.isAdmin,
              Permission.readUsers
            ],
            component: AdminUsersPage
          },
          {
            name: RouteName.AdminUsersListPage,
            pathname: '/admin/users/list',
            permissions: [
              Permission.isLogged,
              Permission.isAdmin,
              Permission.readUsers
            ],
            component: AdminUsersListPage
          },
          {
            name: RouteName.AdminUsersEditPage,
            pathname: '/admin/user/edit',
            permissions: [
              Permission.isLogged,
              Permission.isAdmin,
              Permission.readUsers,
              Permission.editUsers
            ],
            component: AdminUsersEditPage
          }
        ]}
      />
    </>
  )
}

export default AdminPage
