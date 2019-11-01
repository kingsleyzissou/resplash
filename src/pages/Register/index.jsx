import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import { FontAwesomeIcon ***REMOVED*** from '@fortawesome/react-fontawesome'
import { faCoffee ***REMOVED*** from '@fortawesome/free-solid-svg-icons'
import {
  HeroBody, Container, Column, Box
***REMOVED*** from 'bloomer'

const Register = () => {
  return (
    <HeroBody>
      <Container hasTextAlign="centered">
        <Column isSize={6***REMOVED*** isOffset={3***REMOVED***>
          <Box className="login-form" >
            <FontAwesomeIcon icon={faCoffee***REMOVED*** size="2x" style={{ color: '#fff' ***REMOVED******REMOVED*** />
            <h1 className="title">Register</h1>
            <RegisterForm />
          </Box>
        </Column>
      </Container>
    </HeroBody>
  )
***REMOVED***

export default Register