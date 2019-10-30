import React from 'react';
import { BrowserRouter as Router, Switch, Route ***REMOVED*** from 'react-router-dom'
import { Hero ***REMOVED*** from 'bloomer'
import './App.scss'
import routes from './routes'
import Navbar from './components/Navbar'
import * as firebase from 'firebase'
import firebaseConfig from './config/firebase'

firebase.initializeApp(firebaseConfig)

export const AuhtContext = React.createContext(null)

function App() {
  return (
    <div className="App">
      <Router>
        <Hero isColor="info" isFullHeight style={{ overflow: 'scroll' ***REMOVED******REMOVED***>
          <Navbar />
          <Switch>
            {
              routes.map((r, index) => {
                return (
                  <Route
                    key={index***REMOVED***
                    path={r.path***REMOVED***
                    exact={r.exact***REMOVED***
                    component={r.main***REMOVED***
                  />
                )
              ***REMOVED***)
            ***REMOVED***
          </Switch>
        </Hero>
      </Router>
    </div>
  );
***REMOVED***

export default App;
