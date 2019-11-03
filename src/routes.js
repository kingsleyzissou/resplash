import React from 'react'
import Login from './pages/Login'
import Search from './pages/Search'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { ApiContext ***REMOVED*** from './services/api'

let routes = [
  {
    name: 'dashboard', exact: true, path: '/', dashboard: true, main: () =>
      <ApiContext.Consumer>
        {api =>
          <Dashboard Collection={api.getCollectionModel()***REMOVED*** />
        ***REMOVED***
      </ApiContext.Consumer>
  ***REMOVED***,
  { name: 'search', exact: true, path: '/search', dashboard: true, main: () => <Search /> ***REMOVED***,
  { name: 'login', exact: true, path: '/login', dashboard: false, main: () => <Login /> ***REMOVED***,
  { name: 'register', exact: true, path: '/register', dashboard: false, main: () => <Register /> ***REMOVED***,
]

export default routes