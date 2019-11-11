
import React, { Fragment, useState } from 'react'
import useForm from 'react-hook-form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera as Camera } from "@fortawesome/free-solid-svg-icons";
import { Field, Control, Help, Notification, Delete, Button, Box } from 'bloomer'
import { inputClasses } from '../../utils/formClasses'

const RecoverForm = ({ auth, history }) => {

  const { register, handleSubmit, errors } = useForm()
  const [errs, setErrs] = useState({ message: '' })
  const [loading, setLoading] = useState(false)

  const clearError = () => {
    const error = { message: '' }
    setErrs(error)
  }

  const reset = ({ email }) => {
    setLoading(true)
    auth.recover(email)
      .then(() => history.push('/login'))
      .catch(({ message }) => {
        setErrs({ message })
        setLoading(false)
      })
  }

  return (
    <Fragment>
      <Box className="login-form" >
        <FontAwesomeIcon icon={Camera} size="2x" style={{ color: '#fff' }} />
        <h1 className="title">Recover</h1>

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
        <Button
          onClick={handleSubmit(reset)}
          isColor="info"
          isSize="large"
          isFullWidth
          isLoading={loading}
        >
          Reset
        </Button>
      </Box>
    </Fragment>
  )
}

export default RecoverForm