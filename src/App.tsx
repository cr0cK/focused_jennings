import * as React from 'react'
import './App.css'
import { MyRouterContext } from './contextes/MyRouterContext'
import { UserContext } from './contextes/UserContext'
import { users } from './entities/users'
import MyRouter from './MyRouter'
import { useMyRouter } from './MyRouter/hooks'
import { Permission, RouteName } from './MyRouter/types'
import Navigation from './Navigation'
import UsersSelection from './Navigation/UsersSelection'
import LoginPage from './Pages/LoginPage'
import RootPage from './Pages/RootPage'

function App() {
  const [user, setUser] = React.useState(users.notLoggedUser)

  const { currentPathname } = useMyRouter()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MyRouterContext.Provider value={{ currentPathname }}>
        <h3>Select a user</h3>
        <UsersSelection />

        <h3>Select a page</h3>
        <Navigation />

        <h3>Content of the page</h3>
        <MyRouter
          routes={[
            {
              name: RouteName.LoginPage,
              pathname: '/login',
              permissions: [],
              component: LoginPage
            },
            {
              name: RouteName.RootPage,
              pathname: '',
              permissions: [Permission.isLogged],
              component: RootPage
            }
          ]}
        />
      </MyRouterContext.Provider>
    </UserContext.Provider>
  )
}

export default App
