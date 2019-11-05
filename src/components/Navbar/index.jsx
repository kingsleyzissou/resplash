import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../services/auth'
import {
  Container, HeroHeader, Image, Navbar as Nav, NavbarMenu, NavbarItem,
  NavbarBurger, NavbarBrand, NavbarEnd, NavbarDropdown,
  NavbarDivider
} from 'bloomer'
import { withRouter } from 'react-router-dom'

const Navbar = ({ history }) => {
  const [isActive, setIsActive] = useState(false)

  const auth = useContext(AuthContext);
  const authenticated = auth.authenticated()
  const user = auth.getCurrentUser()

  const logout = () => {
    auth.logout()
    history.push('/login')
  }

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
              <NavbarBurger isActive={isActive} onClick={() => setIsActive(!isActive)} />
            </NavbarBrand>
            <NavbarMenu isActive={isActive}>
              <NavbarEnd>
                <Link to="/" className="navbar-item">Dashboard</Link>
                {
                  !authenticated && (
                    <Fragment>
                      <Link to="/login" className="navbar-item">Login</Link>
                      <Link to="/register" className="navbar-item">Register</Link>
                    </Fragment>
                  )
                }
                {
                  authenticated &&
                  <NavbarItem hasDropdown isHoverable>
                    <NavbarItem href="#" className="navbar-link">
                      <span>{user.displayName || user.email}&nbsp;&nbsp;</span>
                      <figure className="image is-24x24">
                        <img className="is-rounded" src={user.photoURL || '/user.jpg'} alt="User icon" />
                      </figure>
                    </NavbarItem>
                    <NavbarDropdown>
                      <Link to="/profile" className="navbar-item" >
                        View Profile
                      </Link>
                      <NavbarDivider />
                      <NavbarItem href="#"
                        onClick={logout}
                      >
                        Logout
                      </NavbarItem>
                    </NavbarDropdown>
                  </NavbarItem>
                }
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Nav>
      </HeroHeader>
    </Fragment>
  )
}

export default withRouter(Navbar)