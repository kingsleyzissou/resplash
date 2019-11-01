import React from 'react'
import { FontAwesomeIcon ***REMOVED*** from "@fortawesome/react-fontawesome";
import { faCoffee ***REMOVED*** from "@fortawesome/free-solid-svg-icons";
import { HeroBody, Container, Column, Box ***REMOVED*** from 'bloomer'
import LoginForm from '../../components/LoginForm'

const Login = () => {
  return (
    <HeroBody>
      <Container hasTextAlign="centered">
        <Column isSize={6***REMOVED*** isOffset={3***REMOVED***>
          <Box className="login-form" >
            <FontAwesomeIcon icon={faCoffee***REMOVED*** size="2x" style={{ color: '#fff' ***REMOVED******REMOVED*** />
            <h1 className="title">Login</h1>
            <LoginForm />
          </Box>
        </Column>
      </Container>
    </HeroBody>
  )
***REMOVED***

export default Login