import React, { useContext } from 'react'
import { Container, Column } from 'bloomer'
import { withRouter } from 'react-router-dom'
import { LoginForm } from '../../components'
import { AuthContext } from '../../services/auth';

const Login = ({ history }) => {
  const auth = useContext(AuthContext)
  return (
    <Container hasTextAlign="centered">
      <Column isSize={6} isOffset={3}>
        <LoginForm auth={auth} history={history} />
      </Column>
    </Container>
  )
}

export default withRouter(Login)