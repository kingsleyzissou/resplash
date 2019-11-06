import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss'
import RouteList from './routes/RouteList'
import Api, { ApiContext } from './services/api'
import AuthService, { AuthContext } from './services/auth'
import UserModel from './services/user'
import CollectionModel from './services/collection'

function App() {
  const ApiLayer = new Api(new UserModel(), new CollectionModel())
  return (
    <ApiContext.Provider value={ApiLayer}>
      <AuthContext.Provider value={new AuthService(ApiLayer.getUserModel())}>
        <div className="App">
          <Router>
            <Switch>
              <RouteList />
            </Switch>
          </Router>
        </div>
      </AuthContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
