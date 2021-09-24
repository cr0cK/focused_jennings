import * as React from 'react'
import { RouteName } from '../MyRouter/types'
import Link from './Link'

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = props => {
  return (
    <ul>
      <li>
        <Link to="/login" label={RouteName.LoginPage} />
      </li>
      <li>
        <Link to="/" label={RouteName.RootPage} />
      </li>
      <li>
        <Link to="/dashboard" label={RouteName.DashboardPage} />
      </li>
      <li>
        <Link to="/admin" label={RouteName.AdminPage} />
      </li>
      <li>
        <Link to="/admin/users" label={RouteName.AdminUsersPage} />
      </li>
      <li>
        <Link to="/admin/users/list" label={RouteName.AdminUsersListPage} />
      </li>
      <li>
        <Link to="/admin/users/edit" label={RouteName.AdminUsersEditPage} />
      </li>
      <li>
        <Link to="/admin/roles" label={RouteName.AdminRolesPage} />
      </li>
      <li>
        <Link to="/admin/roles/list" label={RouteName.AdminRolesListPage} />
      </li>
      <li>
        <Link to="/admin/roles/edit" label={RouteName.AdminRolesEditPage} />
      </li>
    </ul>
  )
}

export default Navigation
