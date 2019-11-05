import React, { Fragment } from 'react'
import { Hero, Navbar as Nav, Container } from 'bloomer'

export default ({ Navbar, Component }) => {
  return (
    <Fragment>
      <Hero isColor="info" style={{ overflow: 'scroll', marginBottom: 2 + 'em' }}>
        <Navbar />
        <Nav className="has-shadow has-text-white" style={{ background: '#3AB6FF' }}>
          <Container>
            {/* <nav class="breadcrumb has-text-white" aria-label="breadcrumbs">
              <ul>
                <li>Dashboard&nbsp;</li>
              </ul>
            </nav> */}
          </Container>
        </Nav>
      </Hero>
      <Component />
    </Fragment >
  )
}