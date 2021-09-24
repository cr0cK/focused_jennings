import * as React from 'react'
import { User } from '../types/Common'

export const UserContext = React.createContext<{
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
} | null>(null)
