import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const routes = [
  { name: 'dashboard', exact: true, path: '/', main: () => <Dashboard /> ***REMOVED***,
  { name: 'login', exact: true, path: '/login', main: () => <Login /> ***REMOVED***,
  { name: 'register', exact: true, path: '/register', main: () => <Register /> ***REMOVED***,
]

export default routes