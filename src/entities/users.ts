import { Permission } from '../MyRouter/types'
import { User } from '../types/Common'

const notLoggedUser: User = {
  name: 'Not logged user',
  permissions: []
}

const loggedUser: User = {
  name: 'Logged user',
  permissions: [...notLoggedUser.permissions, Permission.isLogged]
}

const readDashboardUser: User = {
  name: 'Read dashboard user',
  permissions: [...loggedUser.permissions, Permission.readDashboard]
}

const basicAdminUser: User = {
  name: 'Basic admin user',
  permissions: [...readDashboardUser.permissions, Permission.isAdmin]
}

const readOnlyAdminUser: User = {
  name: 'Read only admin user',
  permissions: [
    ...basicAdminUser.permissions,
    Permission.adminReadUsers,
    Permission.adminReadRoles
  ]
}

const superAdminUser: User = {
  name: 'Super admin user',
  permissions: [
    ...readOnlyAdminUser.permissions,
    Permission.adminEditUsers,
    Permission.adminEditRoles
  ]
}

export const users = {
  notLoggedUser,
  loggedUser,
  readDashboardUser,
  basicAdminUser,
  readOnlyAdminUser,
  superAdminUser
}
