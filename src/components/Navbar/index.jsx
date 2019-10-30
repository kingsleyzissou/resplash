import React, { Fragment, useState ***REMOVED*** from 'react'
import { Link ***REMOVED*** from 'react-router-dom'
import {
  Container, HeroHeader, Image, Navbar, NavbarMenu, NavbarItem,
  NavbarBurger, NavbarBrand, NavbarEnd, NavbarDropdown,
  NavbarDivider
***REMOVED*** from 'bloomer'

export default () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Fragment>
      <HeroHeader>
        <Navbar className="main-navbar">
          <Container>
            <NavbarBrand>
              <Link to="/" className="navbar-item">
                <Image isSize="24x24" src="/logo.png" />
                &nbsp;&nbsp;
                Resplash
               </Link>
              <NavbarBurger isActive={isActive***REMOVED*** onClick={() => setIsActive(!isActive)***REMOVED*** />
            </NavbarBrand>
            <NavbarMenu isActive={isActive***REMOVED***>
              <NavbarEnd>
                <Link to="/" className="navbar-item">Dashboard</Link>
                <Link to="/login" className="navbar-item">Login</Link>
                <Link to="/register" className="navbar-item">Register</Link>
                <NavbarItem hasDropdown isHoverable>
                  <NavbarItem href="#" className="navbar-link">
                    <Image
                      isSize="24x24"
                      style={{ borderRadius: 999 + 'px' ***REMOVED******REMOVED***
                      src="https://bulma.io/images/placeholders/32x32.png"
                    />
                    <span>&nbsp;&nbsp;@</span>
                  </NavbarItem>
                  <NavbarDropdown>
                    <Link to="/profile" className="navbar-item" >
                      View Profile
                    </Link>
                    <NavbarDivider />
                    <Link to='/logout' className="navbar-item">Logout</Link>
                  </NavbarDropdown>
                </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Navbar>
      </HeroHeader>
    </Fragment>
  )
***REMOVED***