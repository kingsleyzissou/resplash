import React from 'react';
import { BrowserRouter as Router, Switch, Route ***REMOVED*** from 'react-router-dom'
import { Hero ***REMOVED*** from 'bloomer'
import './App.scss'
import routes from './routes'
import Navbar from './components/Navbar'
import AuthService, { AuthContext ***REMOVED*** from './services/auth'


// import authenticated from './middleware/authenticated'

// const initState = {
//   value: {
//     isLoggedIn: false,
//     user: {***REMOVED***
//   ***REMOVED***
// ***REMOVED***

function App() {
  // const [user, setUser] = useState(initState)

  // useEffect(() => {
  //   authenticated({
  //     setUser,
  //     apiKey: firebaseConfig.apiKey
  //   ***REMOVED***)
  // ***REMOVED***, [])

  return (
    <AuthContext.Provider value={new AuthService()***REMOVED***>
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
    </AuthContext.Provider>
  );
***REMOVED***

export default App;
