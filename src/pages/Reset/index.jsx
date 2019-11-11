import React, { useContext } from 'react'
import { Container, Column } from 'bloomer'
import { withRouter } from 'react-router-dom'
import { ResetForm } from '../../components'
import { AuthContext } from '../../services/auth';

const Reset = ({ history }) => {
  const auth = useContext(AuthContext)
  return (
    <Container hasTextAlign="centered">
      <Column isSize={4} isOffset={4}>
        <ResetForm auth={auth} history={history} />
      </Column>
    </Container>
  )
}

export default withRouter(Reset)