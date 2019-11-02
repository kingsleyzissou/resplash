import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

let routes = [
  { name: 'dashboard', exact: true, path: '/', dashboard: true, main: () => <Dashboard /> ***REMOVED***,
  { name: 'login', exact: true, path: '/login', dashboard: false, main: () => <Login /> ***REMOVED***,
  { name: 'register', exact: true, path: '/register', dashboard: false, main: () => <Register /> ***REMOVED***,
]

export default routes