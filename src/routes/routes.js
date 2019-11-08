import React from 'react'
import Login from '../pages/Login'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Collection from '../pages/Collection'
import { ApiContext } from '../services/api'

let routes = [
  { name: 'login', exact: true, path: '/login', dashboard: false, type: 'guest', main: () => <Login /> },
  { name: 'register', exact: true, path: '/register', dashboard: false, type: 'guest', main: () => <Register /> },
  {
    name: 'collection', exact: false, path: '/collection/:id', dashboard: true, type: 'protected', main: () =>
      <ApiContext.Consumer>
        {api =>
          <Collection Collection={api.getCollectionModel()} />
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