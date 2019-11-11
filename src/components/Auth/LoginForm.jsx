
import React, { Fragment, useState } from 'react'
import useForm from 'react-hook-form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee as Coffee } from "@fortawesome/free-solid-svg-icons";
import { Field, Control, Help, Notification, Delete, Button, Image, Box } from 'bloomer'
import { inputClasses } from '../../utils/formClasses'
import { Link } from 'react-router-dom'

const LoginForm = ({ auth, history }) => {

  const { register, handleSubmit, errors } = useForm()
  const [errs, setErrs] = useState({ message: '' })
  const [loading, setLoading] = useState(false)

  const clearError = () => {
    const error = { message: '' }
    setErrs(error)
  }

  const login = ({ email, password }) => {
    setLoading(true)
    auth.login(email, password)
      .then(() => history.push('/dashboard'))
      .catch(({ message }) => {
        setErrs({ message })
        setLoading(false)
      })
  }

  const googleLogin = () => {
    setLoading(true)
    auth.googleLogin()
      .then(() => history.push('/dashboard'))
      .catch(({ message }) => {
        setErrs({ message })
        setLoading(false)
      })
  }

  return (
    <Fragment>
      <Box className="login-form" >
        <FontAwesomeIcon icon={Coffee} size="2x" style={{ color: '#fff' }} />
        <h1 className="title">Login</h1>

        {errs.message &&
          <Notification isColor="danger">
            <Delete onClick={clearError} />
            {errs.message}
          </Notification>
        }
        <Field>
          <Control>
            <input
              className={inputClasses('email', errors)}
              type="email"
              name="email"
              placeholder="Email"
              autoFocus=""
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address"
                }
              })}
            />
          </Control>
          {errors.email && (
            <Help isColor="danger" className="has-text-left">{errors.email.message}</Help>
          )}
        </Field>
        <Field>
          <Control>
            <input
              className={inputClasses('password', errors)}
              type="password"
              name="password"
              placeholder="Password"
              onChange={clearError}
              ref={register({ required: true })}
            />
          </Control>
          {errors.password && (
            <Help isColor="danger" className="has-text-left">{errors.password.message}</Help>
          )}
        </Field>
        <Button
          onClick={handleSubmit(login)}
          isColor="info" isSize="large"
          isFullWidth
          isLoading={loading}
        >
          Login
        </Button>
        <hr />
        <p className="has-text-white" style={{ marginBottom: 1 + 'em' }}>Or Login with</p>
        <Button onClick={googleLogin}>
          <Image
            isSize="16x16"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
          &nbsp;&nbsp;Google
        </Button>
      </Box>
      <p>
        <Link to="/recover">Forgot password?</Link>
      </p>
    </Fragment>
  )
}

export default LoginForm