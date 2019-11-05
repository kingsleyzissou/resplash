import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import routes from './routes'
import Api, { ApiContext } from './services/api'
import AuthService, { AuthContext } from './services/auth'
import UserModel from './services/user'
import CollectionModel from './services/collection'
import Navbar from './components/Navbar'
import { AppLayout, DashboardLayout } from './layout'

const LayoutContext = React.createContext(null)
export { LayoutContext }

function App() {
  const ApiLayer = new Api(new UserModel(), new CollectionModel())
  return (
    <ApiContext.Provider value={ApiLayer}>
      <AuthContext.Provider value={new AuthService(ApiLayer.getUserModel())}>
        <div className="App">
          <Router>
            <Switch>
              {
                routes.map((route, index) => {
                  let Component = route.main
                  let Layout = (!route.dashboard) ?
                    (<AppLayout Component={Component} Navbar={Navbar} />) :
                    (<DashboardLayout Component={Component} Navbar={Navbar} />)
                  return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={() => Layout}
                  />
                })
              }
            </Switch>
          </Router>
        </div>
      </AuthContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
