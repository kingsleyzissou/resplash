import React, { Fragment ***REMOVED*** from 'react'
import { Hero, Navbar as Nav, Container ***REMOVED*** from 'bloomer'

export default ({ Navbar, Component ***REMOVED***) => {
  return (
    <Fragment>
      <Hero isColor="info" style={{ overflow: 'scroll', marginBottom: 2 + 'em' ***REMOVED******REMOVED***>
        <Navbar />
        <Nav className="has-shadow has-text-white" style={{ background: '#3AB6FF' ***REMOVED******REMOVED***>
          <Container>
            {/* <nav class="breadcrumb has-text-white" aria-label="breadcrumbs">
              <ul>
                <li>Dashboard&nbsp;</li>
              </ul>
            </nav> */***REMOVED***
          </Container>
        </Nav>
      </Hero>
      <Component />
    </Fragment >
  )
***REMOVED***