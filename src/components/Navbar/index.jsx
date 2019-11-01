import React, { Fragment, useContext, useState ***REMOVED*** from 'react'
import { Link ***REMOVED*** from 'react-router-dom'
import { AuthContext ***REMOVED*** from '../../services/auth'
import {
  Container, HeroHeader, Image, Navbar as Nav, NavbarMenu, NavbarItem,
  NavbarBurger, NavbarBrand, NavbarEnd, NavbarDropdown,
  NavbarDivider
***REMOVED*** from 'bloomer'
import { withRouter ***REMOVED*** from 'react-router-dom'

const Navbar = ({ history ***REMOVED***) => {
  const [isActive, setIsActive] = useState(false)

  const auth = useContext(AuthContext);
  const authenticated = auth.authenticated()
  const user = auth.getCurrentUser()

  const logout = () => {
    auth.logout()
    history.push('/login')
  ***REMOVED***

  return (
    <Fragment>
      <HeroHeader>
        <Nav className="main-navbar">
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
                      <span>{user.displayName || user.email***REMOVED***&nbsp;&nbsp;</span>
                      <figure className="image is-24x24">
                        <img className="is-rounded" src={user.photoURL || '/user.jpg'***REMOVED*** alt="User icon" />
                      </figure>
                    </NavbarItem>
                    <NavbarDropdown>
                      <Link to="/profile" className="navbar-item" >
                        View Profile
                      </Link>
                      <NavbarDivider />
                      <NavbarItem href="#"
                        onClick={logout***REMOVED***
                      >
                        Logout
                      </NavbarItem>
                    </NavbarDropdown>
                  </NavbarItem>
                ***REMOVED***
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Nav>
      </HeroHeader>
    </Fragment>
  )
***REMOVED***

export default withRouter(Navbar)