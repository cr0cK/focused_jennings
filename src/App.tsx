import './App.css'
import { UserContext } from './contextes/User'
import MyRouter from './MyRouter'
import { Permission, RouteName, Routes } from './MyRouter/types'
import LoginPage from './Pages/LoginPage'
import RootPage from './Pages/RootPage'
import { User } from './types/Common'

function App() {
  const user: User = {
    permissions: [Permission.isLogged]
  }

  const routes: Routes = [
    {
      name: RouteName.LoginPage,
      pathname: '/login',
      permissions: [],
      component: LoginPage
    },
    {
      name: RouteName.RootPage,
      pathname: '/',
      permissions: [Permission.isLogged],
      component: RootPage
    }
  ]

  return (
    <UserContext.Provider value={{ user }}>
      <MyRouter routes={routes} />
    </UserContext.Provider>
  )
}

export default App
