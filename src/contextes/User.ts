import * as React from 'react'
import { User } from '../types/Common'

export const UserContext = React.createContext<{ user: User } | null>(null)
