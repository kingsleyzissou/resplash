import React, { Fragment, useContext, useState ***REMOVED*** from 'react'
import { Link ***REMOVED*** from 'react-router-dom'
import { AuthContext ***REMOVED*** from '../../App'
import {
  Container, HeroHeader, Image, Navbar, NavbarMenu, NavbarItem,
  NavbarBurger, NavbarBrand, NavbarEnd, NavbarDropdown,
  NavbarDivider
***REMOVED*** from 'bloomer'

export default () => {
  const [isActive, setIsActive] = useState(false)

  const Auth = useContext(AuthContext);
  let { authenticated, user ***REMOVED*** = Auth.user;

  if (user) {
    user = JSON.parse(user);
  ***REMOVED***

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
                {
                  !authenticated && (
                    <Fragment>
                      <Link to="/login" className="navbar-item">Login</Link>
                      <Link to="/register" className="navbar-item">Register</Link>
                    </Fragment>
                  )
                ***REMOVED***
                {
                  authenticated &&
                  <NavbarItem hasDropdown isHoverable>
                    <NavbarItem href="#" className="navbar-link">
                      <span>{user.displayName***REMOVED***&nbsp;&nbsp;</span>
                      <Image
                        isSize="24x24"
                        style={{ borderRadius: 999 + 'px' ***REMOVED******REMOVED***
                        src={user.photoURL***REMOVED***
                      />
                    </NavbarItem>
                    <NavbarDropdown>
                      <Link to="/profile" className="navbar-item" >
                        View Profile
                      </Link>
                      <NavbarDivider />
                      <Link to='/logout' className="navbar-item">Logout</Link>
                    </NavbarDropdown>
                  </NavbarItem>
                ***REMOVED***
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Navbar>
      </HeroHeader>
    </Fragment>
  )
***REMOVED***