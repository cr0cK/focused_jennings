import * as React from 'react'
import { UserContext } from '../contextes/UserContext'
import { users } from '../entities/users'
import { User } from '../types/Common'

interface IUsersSelectionProps {}

const UsersSelection: React.FC<IUsersSelectionProps> = props => {
  const userContext = React.useContext(UserContext)

  if (!userContext) {
    return null
  }

  const style: React.CSSProperties = {
    margin: 0,
    padding: '0 5px',
    listStyle: 'none'
  }

  const hanleUserOnClick = (user: User) => () => {
    userContext.setUser(user)
  }

  return (
    <div>
      Current user selection: <strong>{userContext.user.name}</strong>
      <ul style={{ display: 'flex' }}>
        {Object.values(users).map(user => {
          return (
            <li key={user.name} style={style}>
              <button onClick={hanleUserOnClick(user)}>{user.name}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UsersSelection
