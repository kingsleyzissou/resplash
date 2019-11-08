import React, { useContext } from 'react'
import RegisterForm from '../../components/RegisterForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Container, Column, Box } from 'bloomer'
import { withRouter } from 'react-router-dom'
import { AuthContext } from '../../services/auth'

const Register = () => {
  const auth = useContext(AuthContext)
  return (
    <Container hasTextAlign="centered">
      <Column isSize={4} isOffset={4}>
        <Box className="login-form" >
          <FontAwesomeIcon icon={faCoffee} size="2x" style={{ color: '#fff' }} />
          <h1 className="title">Register</h1>
          <RegisterForm auth={auth} />
        </Box>
      </Column>
    </Container>
  )
}

export default withRouter(Register)