import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Search from '../pages/Search'
import Profile from '../pages/Profile'
import Recover from '../pages/Recover'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Collection from '../pages/Collection'
import Collections from '../pages/Collections'
import { ApiContext } from '../services/api'

let routes = [
  { name: 'home', exact: true, path: '/', dashboard: false, type: 'guest', main: () => <Home /> },
  { name: 'login', exact: true, path: '/login', dashboard: false, type: 'guest', main: () => <Login /> },
  { name: 'register', exact: true, path: '/register', dashboard: false, type: 'guest', main: () => <Register /> },
  { name: 'recover', exact: true, path: '/recover', dashboard: false, type: 'guest', main: () => <Recover /> },
  {
    name: 'collection', exact: false, path: '/collection/:_id', dashboard: true, type: 'protected', main: () =>
      <ApiContext.Consumer>
        {api =>
          <Collection api={api} />
        }
      </ApiContext.Consumer>
  },
  { name: 'search', exact: true, path: '/search', dashboard: true, type: 'protected', main: () => <Search /> },
  {
    name: 'dashboard', exact: true, path: '/dashboard', dashboard: true, type: 'protected', main: () =>
      <ApiContext.Consumer>
        {api =>
          <Dashboard Collection={api.getCollectionModel()} />
        }
      </ApiContext.Consumer>
  },
  {
    name: 'collections', exact: true, path: '/collections', dashboard: true, type: 'protected', main: () =>
      <ApiContext.Consumer>
        {api =>
          <Collections Collection={api.getCollectionModel()} />
        }
      </ApiContext.Consumer>
  },
  {
    name: 'profile', exact: true, path: '/profile', dashboard: true, type: 'protected', main: () =>
      <ApiContext.Consumer>
        {api =>
          <Profile api={api} />
        }
      </ApiContext.Consumer>
  },
]

export default routes