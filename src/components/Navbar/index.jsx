import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera as Camera } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '../../services/auth'
import {
  Container, HeroHeader, Navbar as Nav, NavbarMenu, NavbarItem,
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
        <Nav className="is-info main-navbar">
          <Container>
            <NavbarBrand>
              <Link to="/" className="navbar-item">
                <FontAwesomeIcon icon={Camera} style={{ color: '#fff' }} />
                &nbsp;&nbsp;
                Resplash
               </Link>
              <NavbarBurger isActive={isActive} onClick={() => setIsActive(!isActive)} />
            </NavbarBrand>
            <NavbarMenu isActive={isActive}>
              <NavbarEnd>
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
                  <Fragment>
                    <Link to="/dashboard" className="navbar-item">Dashboard</Link>
                    <Link to="/collections" className="navbar-item">All Collections</Link>
                    <Link to="/search" className="navbar-item">Search</Link>
                    <NavbarItem hasDropdown isHoverable>
                      <NavbarItem href="#" className="navbar-link">
                        <span>{user.displayName || user.email}&nbsp;&nbsp;</span>
                        <figure className="image is-24x24">
                          <img className="is-rounded" src={user.photoURL || '/user.jpg'} alt="User icon" />
                        </figure>
                      </NavbarItem>
                      <NavbarDropdown style={{ zIndex: 99 }}>
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
                  </Fragment>
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