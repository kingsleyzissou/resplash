import React from 'react'
import { Route } from 'react-router-dom'
import routes from './routes'
import GuestRoute from './GuestRoute'
import ProtectedRoute from './ProtectedRoute'
import Navbar from '../components/Navbar'
import { AppLayout, DashboardLayout } from '../layout'

const RouteComponent = ({ type, component: Component, ...rest }) => {
  if (type === 'guest') return <GuestRoute component={Component}  {...rest} />
  if (type === 'protected') return <ProtectedRoute component={Component} {...rest} />
  return <Route {...rest} component={Component} />
}

const RouteList = () => {
  return (
    routes.map((route, index) => {
      let Component = route.main
      let Layout = (!route.dashboard) ?
        (<AppLayout Component={Component} Navbar={Navbar} />) :
        (<DashboardLayout Component={Component} Navbar={Navbar} />)
      return <RouteComponent
        type={route.type}
        key={index}
        path={route.path}
        exact={route.exact}
        component={() => Layout}
      />
    })
  )
}

export default RouteList


