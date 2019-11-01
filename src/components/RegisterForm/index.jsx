import React, { Fragment, useContext, useState ***REMOVED*** from 'react'
import useForm from 'react-hook-form'
import { withRouter ***REMOVED*** from 'react-router-dom'
import { Field, Control, Help, Notification, Delete, Button, Image ***REMOVED*** from 'bloomer'
import { AuthContext ***REMOVED*** from '../../services/auth'
import { emailInputClasses, passwordInputClasses, confirmPasswordInputClasses ***REMOVED*** from '../../helpers/formClasses'

const RegisterForm = ({ history ***REMOVED***) => {
  const auth = useContext(AuthContext);

  const { register, handleSubmit, watch, errors ***REMOVED*** = useForm()
  const [errs, setErrs] = useState({ message: '' ***REMOVED***)

  const clearError = () => {
    const error = { message: '' ***REMOVED***
    setErrs(error)
  ***REMOVED***

  const signup = ({ email, password ***REMOVED***) => {
    auth.register(email, password)
      .then(() => history.push('/dashboard'))
      .catch(({ message ***REMOVED***) => setErrs({ message ***REMOVED***))
  ***REMOVED***

  const googleLogin = () => {
    auth.googleLogin()
      .then(() => history.push('/dashboard'))
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
            className={emailInputClasses(errors)***REMOVED***
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
            className={passwordInputClasses(errors)***REMOVED***
            type="password"
            name="password"
            placeholder="Password"
            ref={register({ required: true ***REMOVED***)***REMOVED***
          />
        </Control>
        {errors.password && (
          <Help isColor="danger" className="has-text-left">{errors.password.message***REMOVED***</Help>
        )***REMOVED***
      </Field>
      <Field>
        <Control>
          <input
            className={confirmPasswordInputClasses(errors)***REMOVED***
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            ref={register({
              required: true,
              validate: (value) => {
                return value === watch('password') || 'Passwords must match'
              ***REMOVED***
            ***REMOVED***)***REMOVED***
          />
        </Control>
        {errors.confirm && (
          <Help isColor="danger" className="has-text-left">{errors.confirm.message***REMOVED***</Help>
        )***REMOVED***
      </Field>
      <Button onClick={handleSubmit(signup)***REMOVED*** isColor="info" isSize="large" isFullWidth>Register</Button>
      {/* forgot password thing */***REMOVED***
      <hr />
      <p className="has-text-white" style={{ marginBottom: 1 + 'em' ***REMOVED******REMOVED***>Or Register with</p>
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

export default withRouter(RegisterForm)