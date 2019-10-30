import React, { Fragment ***REMOVED*** from 'react'

export default () => {
  return (
    // <section className="hero is-info">
    <Fragment>
      <div className="hero-head">
        <nav className="navbar main-navbar">
          <div className="container" >
            <div className="navbar-brand">
              <a href="/" className="navbar-item">
                <figure className="image is-24x24">
                  {/* Source a placeholder */***REMOVED***
                  {/* <img src="/images/logo.png" alt="Placeholder" /> */***REMOVED***
                </figure>
                &nbsp;&nbsp;
                Resplash
               </a>
              <span className="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="/dashboard" className="navbar-item">
                  Dashboard
                </a>
                <a href="/about" className="navbar-item">
                  About
                </a>
                <a href="/login" className="navbar-item">
                  Login
                </a>
                <a href="/signup" className="navbar-item">
                  Signup
                </a>
                <div className="navbar-item has-dropdown">
                  <a href="#" className="navbar-link">
                    <figure className="image is-24x24">
                      <img src="https://bulma.io/images/placeholders/32x32.png" style={{ borderRadius: 999 + 'px' ***REMOVED******REMOVED*** alt="Placeholder" />
                    </figure>
                    <span>&nbsp;&nbsp;@</span>
                  </a>
                  <div className="navbar-dropdown is-right">
                    <hr className="navbar-divider" />
                    <a className="navbar-item" href="/logout">
                      Logout
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <nav className="navbar has-shadow has-text-white" style={{ background: '#3AB6FF' ***REMOVED******REMOVED***>
        <div className="container">

        </div>
      </nav> */***REMOVED***
    </Fragment>
    // </section >
  )
***REMOVED***