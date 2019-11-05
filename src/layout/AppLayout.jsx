import React from 'react'
import { Hero, HeroBody } from 'bloomer'

export default ({ Navbar, Component }) => {
  return (
    <Hero isColor="info" isFullHeight style={{ overflow: 'scroll' }}>
      <Navbar />
      <HeroBody>
        <Component />
      </HeroBody>
    </Hero>
  )
}