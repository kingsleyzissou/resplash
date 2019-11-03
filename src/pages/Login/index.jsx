import React, { useContext ***REMOVED*** from 'react'
import { FontAwesomeIcon ***REMOVED*** from "@fortawesome/react-fontawesome";
import { faCoffee ***REMOVED*** from "@fortawesome/free-solid-svg-icons";
import { Container, Column, Box ***REMOVED*** from 'bloomer'
import { withRouter ***REMOVED*** from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import { AuthContext ***REMOVED*** from '../../services/auth';

const Login = () => {
  const auth = useContext(AuthContext)
  return (
    <Container hasTextAlign="centered">
      <Column isSize={6***REMOVED*** isOffset={3***REMOVED***>
        <Box className="login-form" >
          <FontAwesomeIcon icon={faCoffee***REMOVED*** size="2x" style={{ color: '#fff' ***REMOVED******REMOVED*** />
          <h1 className="title">Login</h1>
          <LoginForm auth={auth***REMOVED*** />
        </Box>
      </Column>
    </Container>
  )
***REMOVED***

export default withRouter(Login)