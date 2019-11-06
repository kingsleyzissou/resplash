import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../services/auth'


export default ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext)
  const authenticated = auth.authenticated()

  if (authenticated) return <Redirect to="/dashboard" />

  return (
    <Route {...rest} component={Component} />
  )

}