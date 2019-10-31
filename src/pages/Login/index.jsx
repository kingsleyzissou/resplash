import React, { useContext, useState ***REMOVED*** from 'react'
import useForm from 'react-hook-form'
import classNames from 'classnames'
import * as firebase from 'firebase'
import { AuthContext ***REMOVED*** from '../../App'
import { FontAwesomeIcon ***REMOVED*** from "@fortawesome/react-fontawesome";
import { faCoffee ***REMOVED*** from "@fortawesome/free-solid-svg-icons";
import {
  HeroBody, Container, Column, Box, Field,
  Control, Help, Notification, Delete, Button, Image
***REMOVED*** from 'bloomer'
import { withRouter ***REMOVED*** from 'react-router-dom'

const Login = ({ history ***REMOVED***) => {
  const Auth = useContext(AuthContext);

  const { register, handleSubmit, errors ***REMOVED*** = useForm()
  const [errs, setErrs] = useState('')

  const onSubmit = data => {
    const { email, password ***REMOVED*** = data
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            console.log(res, Auth)
            history.push('/dashboard')
            if (res.user) Auth.setUser({ authenticated: true, user: res.user ***REMOVED***)
          ***REMOVED***)
          .catch(({ message ***REMOVED***) => {
            setErrs(message)
          ***REMOVED***)
      ***REMOVED***)
  ***REMOVED***

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((res) => {
            history.push('/dashboard')
            if (res.user) Auth.setUser({ authenticated: true, user: res.user ***REMOVED***)
          ***REMOVED***)
          .catch(({ message ***REMOVED***) => {
            setErrs(message)
          ***REMOVED***)
      ***REMOVED***)
  ***REMOVED***

  const emailInputClasses = classNames({
    'input': true,
    'is-large': true,
    'is-danger': errors.email,
  ***REMOVED***);

  const pwInputClasses = classNames({
    'input': true,
    'is-large': true,
    'is-danger': errors.password,
  ***REMOVED***);

  return (
    <HeroBody>
      <Container hasTextAlign="centered">
        <Column isSize={6***REMOVED*** isOffset={3***REMOVED***>
          <Box className="login-form" >
            <FontAwesomeIcon icon={faCoffee***REMOVED*** size="2x" style={{ color: '#fff' ***REMOVED******REMOVED*** />
            <h1 className="title">Login</h1>
            <form action="/login" onSubmit={handleSubmit(onSubmit)***REMOVED*** method="POST">
              {errs &&
                <Notification isColor="danger">
                  <Delete onClick={() => setErrs('')***REMOVED*** />
                  {errs***REMOVED***
                </Notification>
              ***REMOVED***
              <Field>
                <Control>
                  <input
                    className={emailInputClasses***REMOVED***
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoFocus=""
                    ref={register({ required: true ***REMOVED***)***REMOVED***
                  />
                </Control>
                {errors.email && (
                  <Help isColor="danger" className="has-text-left">Please enter email</Help>
                )***REMOVED***
              </Field>
              <Field>
                <Control>
                  <input
                    className={pwInputClasses***REMOVED***
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={register({ required: true ***REMOVED***)***REMOVED***
                  />
                </Control>
                {errors.password && (
                  <Help isColor="danger" className="has-text-left">Please enter password</Help>
                )***REMOVED***
              </Field>
              <Button isColor="info" isSize="large" isFullWidth>Login</Button>
              {/* forgot password thing */***REMOVED***
              <hr />
              <p className="has-text-white" style={{ marginBottom: 1 + 'em' ***REMOVED******REMOVED***>Or Login with</p>
              <Button onClick={handleGoogleLogin***REMOVED***>
                <Image
                  isSize="16x16"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
                &nbsp;&nbsp;Google
              </Button>
            </form>
          </Box>
        </Column>
      </Container>
    </HeroBody>
  )
***REMOVED***

export default withRouter(Login)