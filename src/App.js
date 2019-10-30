import React from 'react';
import { Container ***REMOVED*** from 'bloomer'
import './App.scss'
import Navbar from './components/Navbar'
// import Gallery from './pages/Gallery'
import Album from './pages/Album'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        {/* <Gallery /> */***REMOVED***
        <Album />
      </Container>
    </div>
  );
***REMOVED***

export default App;
