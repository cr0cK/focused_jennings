import { Permission } from '../MyRouter/types'

export interface User {
  name: string
  permissions: Permission[]
}
