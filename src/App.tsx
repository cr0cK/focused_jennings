import './App.css'
import { MyRouterContext } from './contextes/MyRouterContext'
import { UserContext } from './contextes/UserContext'
import MyRouter from './MyRouter'
import { useMyRouter } from './MyRouter/hooks'
import { Permission, RouteName } from './MyRouter/types'
import Navigation from './Navigation'
import LoginPage from './Pages/LoginPage'
import RootPage from './Pages/RootPage'
import { User } from './types/Common'

function App() {
  const user: User = {
    permissions: [Permission.isLogged, Permission.isAdmin, Permission.readUsers]
  }

  const { currentPathname } = useMyRouter()

  return (
    <UserContext.Provider value={{ user }}>
      <MyRouterContext.Provider value={{ currentPathname }}>
        <Navigation />

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
