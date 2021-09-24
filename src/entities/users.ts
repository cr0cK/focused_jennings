import { Permission } from '../MyRouter/types'
import { User } from '../types/Common'

const notLoggedUser: User = {
  name: 'Not logged user',
  permissions: []
}

const loggedUser: User = {
  name: 'Logged user',
  permissions: [Permission.isLogged]
}

const readDashboardUser: User = {
  name: 'Read dashboard user',
  permissions: [Permission.isLogged, Permission.readDashboard]
}

const basicAdminUser: User = {
  name: 'Basic admin user',
  permissions: [
    Permission.isLogged,
    Permission.readDashboard,
    Permission.isAdmin
  ]
}

const readOnlyAdminUser: User = {
  name: 'Read only admin user',
  permissions: [
    Permission.isLogged,
    Permission.readDashboard,
    Permission.isAdmin,
    Permission.adminReadUsers,
    Permission.adminReadRoles
  ]
}

const superAdminUser: User = {
  name: 'Super admin user',
  permissions: [
    Permission.isLogged,
    Permission.readDashboard,
    Permission.isAdmin,
    Permission.adminReadUsers,
    Permission.adminEditUsers,
    Permission.adminReadRoles,
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
