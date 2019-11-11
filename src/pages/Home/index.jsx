import React, { useContext } from 'react'
import { Container } from 'bloomer'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../services/auth'

const Home = () => {
  const auth = useContext(AuthContext)
  const authenticated = auth.authenticated()

  return (
    <Container hasTextAlign="centered">
      <h1 className="title">
        Welcome to Resplash
          </h1>
      <h2 className="subtitle">
        Collect and manage photo inspiration for your next creative project.
      </h2>
      {
        authenticated ? (
          <Link to="/dashboard"
            className="button is-info is-medium is-inverted is-outlined"
          >
            Get Started
          </Link>
        ) : (
            <Link to="/login"
              className="button is-info is-medium is-inverted is-outlined"
            >
              Get Started
          </Link>
          )
      }
    </Container>
  )
}

export default Home