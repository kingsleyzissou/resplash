import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Recover from '../pages/Recover'
import Dashboard from '../pages/Dashboard'
import Collection from '../pages/Collection'
import { ApiContext } from '../services/api'

let routes = [
  { name: 'home', exact: true, path: '/', dashboard: false, type: 'guest', main: () => <Home /> },
  { name: 'login', exact: true, path: '/login', dashboard: false, type: 'guest', main: () => <Login /> },
  { name: 'register', exact: true, path: '/register', dashboard: false, type: 'guest', main: () => <Register /> },
  { name: 'recover', exact: true, path: '/recover', dashboard: false, type: 'guest', main: () => <Recover /> },
  {
    name: 'collection', exact: false, path: '/collection/:id', dashboard: true, type: 'protected', main: () =>
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
]

export default routes