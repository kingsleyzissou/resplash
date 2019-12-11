import React, { Fragment, useState } from 'react'
import useForm from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera as Camera } from '@fortawesome/free-solid-svg-icons'
import { Field, Control, Help, Notification, Delete, Button, Box } from 'bloomer'
import { inputClasses } from '../../utils/formClasses'

const RegisterForm = ({ auth, history }) => {
  const { register, handleSubmit, watch, errors } = useForm()
  const [errs, setErrs] = useState({ message: [] })
  const [loading, setLoading] = useState(false)

  const clearError = () => {
    const error = { message: '' }
    setErrs(error)
  }

  const signup = (input) => {
    setLoading(true)
    auth.register(input)
      .then(() => history.push('/dashboard'))
      .catch(({ message }) => {
        message = message.split(',')
        setErrs({ message })
        setLoading(false)
      })
  }

  // const googleLogin = () => {
  //   setLoading(true)
  //   auth.googleLogin()
  //     .then(() => history.push('/dashboard'))
  //     .catch(({ message }) => {
  //       setErrs({ message })
  //       setLoading(false)
  //     })
  // }

  return (
    <Fragment>
      <Box className="login-form" >
        <FontAwesomeIcon icon={Camera} size="2x" style={{ color: '#fff' }} />
        <h1 className="title">Register</h1>
        {errs.message.length > 0 &&
          <Notification isColor="danger" hasTextAlign="left">
            <Delete onClick={clearError} />
            {errs.message.map((message, key) => <li key={key}>{message}</li>)}
          </Notification>
        }
        <Field>
          <Control>
            <input
              className={inputClasses('username', errors)}
              type="text"
              name="username"
              placeholder="Username"
              autoFocus=""
              ref={register({
                required: true,
              })}
            />
          </Control>
          {errors.username && (
            <Help isColor="danger" className="has-text-left">{errors.email.username}</Help>
          )}
        </Field>
        <Field>
          <Control>
            <input
              className={inputClasses('name', errors)}
              type="text"
              name="name"
              placeholder="Name"
              autoFocus=""
              ref={register({
                required: true,
              })}
            />
          </Control>
          {errors.name && (
            <Help isColor="danger" className="has-text-left">{errors.name.message}</Help>
          )}
        </Field>
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
              ref={register({ required: true })}
            />
          </Control>
          {errors.password && (
            <Help isColor="danger" className="has-text-left">{errors.password.message}</Help>
          )}
        </Field>
        <Field>
          <Control>
            <input
              className={inputClasses('confirm', errors)}
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              ref={register({
                required: true,
                validate: (value) => {
                  return value === watch('password') || 'Passwords must match'
                }
              })}
            />
          </Control>
          {errors.confirm && (
            <Help isColor="danger" className="has-text-left">{errors.confirm.message}</Help>
          )}
        </Field>
        <Button
          onClick={handleSubmit(signup)}
          isColor="info"
          isSize="large"
          isFullWidth
          isLoading={loading}
        >
          Register
        </Button>
        {/* <hr />
        <p className="has-text-white" style={{ marginBottom: 1 + 'em' }}>Or Register with</p>
        <Button onClick={googleLogin}>
          <Image
            isSize="16x16"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
          &nbsp;&nbsp;Google
        </Button> */}
      </Box>
    </Fragment>
  )
}

export default RegisterForm