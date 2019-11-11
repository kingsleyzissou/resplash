import React, { useContext } from 'react'
import { Container, Column } from 'bloomer'
import { withRouter } from 'react-router-dom'
import { RecoverForm } from '../../components'
import { AuthContext } from '../../services/auth';

const Recover = ({ history }) => {
  const auth = useContext(AuthContext)
  return (
    <Container hasTextAlign="centered">
      <Column isSize={4} isOffset={4}>
        <RecoverForm auth={auth} history={history} />
      </Column>
    </Container>
  )
}

export default withRouter(Recover)