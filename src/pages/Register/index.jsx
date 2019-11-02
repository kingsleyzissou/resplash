import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import { FontAwesomeIcon ***REMOVED*** from '@fortawesome/react-fontawesome'
import { faCoffee ***REMOVED*** from '@fortawesome/free-solid-svg-icons'
import {
  Container, Column, Box
***REMOVED*** from 'bloomer'

const Register = () => {
  return (
    <Container hasTextAlign="centered">
      <Column isSize={6***REMOVED*** isOffset={3***REMOVED***>
        <Box className="login-form" >
          <FontAwesomeIcon icon={faCoffee***REMOVED*** size="2x" style={{ color: '#fff' ***REMOVED******REMOVED*** />
          <h1 className="title">Register</h1>
          <RegisterForm />
        </Box>
      </Column>
    </Container>
  )
***REMOVED***

export default Register