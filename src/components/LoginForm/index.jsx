
import React, { Fragment, useState ***REMOVED*** from 'react'
import useForm from 'react-hook-form'
import { Field, Control, Help, Notification, Delete, Button, Image ***REMOVED*** from 'bloomer'
import { inputClasses ***REMOVED*** from '../../utils/formClasses'

const LoginForm = (props) => {

  const { register, handleSubmit, errors ***REMOVED*** = useForm()
  const [errs, setErrs] = useState({ message: '' ***REMOVED***)

  const clearError = () => {
    const error = { message: '' ***REMOVED***
    setErrs(error)
  ***REMOVED***

  const login = ({ email, password ***REMOVED***) => {
    props.auth.login(email, password)
      .then(() => console.log(props))
      .catch(({ message ***REMOVED***) => setErrs({ message ***REMOVED***))
  ***REMOVED***

  const googleLogin = () => {
    props.auth.googleLogin()
      .then(() => console.log(props))
      .catch(({ message ***REMOVED***) => setErrs({ message ***REMOVED***))
  ***REMOVED***

  return (
    <Fragment>
      {errs.message &&
        <Notification isColor="danger">
          <Delete onClick={clearError***REMOVED*** />
          {errs.message***REMOVED***
        </Notification>
      ***REMOVED***
      <Field>
        <Control>
          <input
            className={inputClasses('email', errors)***REMOVED***
            type="email"
            name="email"
            placeholder="Email"
            autoFocus=""
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4***REMOVED***$/i,
                message: "Invalid email address"
              ***REMOVED***
            ***REMOVED***)***REMOVED***
          />
        </Control>
        {errors.email && (
          <Help isColor="danger" className="has-text-left">{errors.email.message***REMOVED***</Help>
        )***REMOVED***
      </Field>
      <Field>
        <Control>
          <input
            className={inputClasses('password', errors)***REMOVED***
            type="password"
            name="password"
            placeholder="Password"
            onChange={clearError***REMOVED***
            ref={register({ required: true ***REMOVED***)***REMOVED***
          />
        </Control>
        {errors.password && (
          <Help isColor="danger" className="has-text-left">{errors.password.message***REMOVED***</Help>
        )***REMOVED***
      </Field>
      <Button onClick={handleSubmit(login)***REMOVED*** isColor="info" isSize="large" isFullWidth>Login</Button>
      {/* forgot password thing */***REMOVED***
      <hr />
      <p className="has-text-white" style={{ marginBottom: 1 + 'em' ***REMOVED******REMOVED***>Or Login with</p>
      <Button onClick={googleLogin***REMOVED***>
        <Image
          isSize="16x16"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
        &nbsp;&nbsp;Google
      </Button>
    </Fragment>
  )
***REMOVED***

export default LoginForm