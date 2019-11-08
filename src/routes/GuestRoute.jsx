import React, { useContext, useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../services/auth'


export default ({ component: Component, ...rest }) => {
  const [mounted, setMounted] = useState(false)
  const auth = useContext(AuthContext)
  const authenticated = auth.authenticated()

  useEffect(() => {
    setMounted(true)
    if (mounted && authenticated) {
      return () => {
        return <Redirect to="/dashboard" />
      }
    }
    return () => {
      setMounted(false)
    }
  }, [authenticated, mounted, setMounted])

  // if (authenticated) 

  return (
    <Route {...rest} component={Component} />
  )

}