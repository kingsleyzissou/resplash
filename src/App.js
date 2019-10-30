import React from 'react';
import { BrowserRouter as Router, Switch, Route ***REMOVED*** from 'react-router-dom'
import { Hero, HeroBody ***REMOVED*** from 'bloomer'
import './App.scss'
// import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Album from './pages/Album'
import Gallery from './pages/Gallery'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Hero isColor="info" isFullHeight style={{ overflow: 'scroll' ***REMOVED******REMOVED***>
          <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/album">
              <Album />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <HeroBody>Hello</HeroBody>
            </Route>
          </Switch>
        </Hero>
      </Router>
    </div>
  );
***REMOVED***

export default App;
