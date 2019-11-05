import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Container, Column, Box } from 'bloomer'
import { withRouter } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import { AuthContext } from '../../services/auth';

const Login = () => {
  const auth = useContext(AuthContext)
  return (
    <Container hasTextAlign="centered">
      <Column isSize={6} isOffset={3}>
        <Box className="login-form" >
          <FontAwesomeIcon icon={faCoffee} size="2x" style={{ color: '#fff' }} />
          <h1 className="title">Login</h1>
          <LoginForm auth={auth} />
        </Box>
      </Column>
    </Container>
  )
}

export default withRouter(Login)