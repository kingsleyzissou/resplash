import React, { Fragment } from 'react'
import { Navbar as Nav, Container, Section } from 'bloomer'

export default ({ Navbar, Component }) => {
  return (
    <Fragment>
      <Navbar />
      <Nav
        className="has-shadow has-text-white"
        style={{ background: '#3AB6FF', zIndex: 0 }}
      />
      <Section>
        <Container>
          <Component />
        </Container>
      </Section>
    </Fragment >
  )
}