import React, { useContext } from 'react'
import { RegisterForm } from '../../components'
import { Container, Column } from 'bloomer'
import { withRouter } from 'react-router-dom'
import { AuthContext } from '../../services/auth'

const Register = ({ history }) => {
  const auth = useContext(AuthContext)
  return (
    <Container hasTextAlign="centered">
      <Column isSize={6} isOffset={3}>
        <RegisterForm auth={auth} history={history} />
      </Column>
    </Container>
  )
}

export default withRouter(Register)