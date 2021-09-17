export interface Route {
  name: RouteName
  pathname: string
  permissions: Permission[]
  component: React.ComponentClass<any> | React.FC<any>
}

export type Routes = Route[]

export enum RouteName {
  LoginPage = 'LoginPage',
  RootPage = 'RootPage',
  DashboardPage = 'DashboardPage',
  AdminPage = 'AdminPage',
  AdminUsersPage = 'AdminUsersPage',
  AdminUsersListPage = 'AdminUsersListPage',
  AdminUsersEditPage = 'AdminUsersEditPage',
  AdminRolesPage = 'AdminRolesPage',
  AdminRolesListPage = 'AdminRolesListPage',
  AdminRolesEditPage = 'AdminRolesEditPage'
}

export enum Permission {
  isLogged = 'isLogged',
  readDashboard = 'readDashboard',
  isAdmin = 'isAdmin',
  readUsers = 'readUsers',
  editUsers = 'editUsers',
  readRoles = 'readRoles',
  editRoles = 'editRoles'
}