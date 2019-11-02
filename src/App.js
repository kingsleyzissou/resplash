import React, { useState ***REMOVED*** from 'react';
import { BrowserRouter as Router, Switch, Route ***REMOVED*** from 'react-router-dom'
import './App.scss'
import routes from './routes'
import Api, { ApiContext ***REMOVED*** from './services/api'
import AuthService, { AuthContext ***REMOVED*** from './services/auth'
import UserModel from './services/user'
import CollectionModel from './services/collection'
import Navbar from './components/Navbar'
import { AppLayout, DashboardLayout ***REMOVED*** from './layout'

const LayoutContext = React.createContext(null)
export { LayoutContext ***REMOVED***

function App() {
  const [fullLayout, setFullLayout] = useState(true)
  const ApiLayer = new Api(new UserModel(), new CollectionModel())
  return (
    <ApiContext.Provider value={ApiLayer***REMOVED***>
      <AuthContext.Provider value={new AuthService(ApiLayer.getUserModel())***REMOVED***>
        <LayoutContext.Provider value={{ fullLayout, setFullLayout ***REMOVED******REMOVED***>
          <div className="App">
            <Router>
              <Switch>
                {
                  routes.map((route, index) => {
                    let Component = route.main
                    let Layout = (!route.dashboard) ?
                      (<AppLayout Component={Component***REMOVED*** Navbar={Navbar***REMOVED*** />) :
                      (<DashboardLayout Component={Component***REMOVED*** Navbar={Navbar***REMOVED*** />)
                    return <Route
                      key={index***REMOVED***
                      path={route.path***REMOVED***
                      exact={route.exact***REMOVED***
                      component={() => Layout***REMOVED***
                    />
                  ***REMOVED***)
                ***REMOVED***
              </Switch>
            </Router>
          </div>
        </LayoutContext.Provider>
      </AuthContext.Provider>
    </ApiContext.Provider>
  );
***REMOVED***

export default App;
