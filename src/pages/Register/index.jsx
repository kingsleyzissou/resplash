import React from 'react'
import useForm from 'react-hook-form'
import classNames from 'classnames'
import { FontAwesomeIcon ***REMOVED*** from "@fortawesome/react-fontawesome";
import { faCoffee ***REMOVED*** from "@fortawesome/free-solid-svg-icons";
import { HeroBody, Container, Column, Box, Field, Control, Help ***REMOVED*** from 'bloomer'

export default () => {
  const { register, handleSubmit, watch, errors ***REMOVED*** = useForm()

  const onSubmit = data => { console.log(data) ***REMOVED***

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

  const confirmInputClasses = classNames({
    'input': true,
    'is-large': true,
    'is-danger': errors.confirm,
  ***REMOVED***);

  return (
    <HeroBody>
      <Container hasTextAlign="centered">
        <Column isSize={6***REMOVED*** isOffset={3***REMOVED***>
          <Box className="login-form" >
            <FontAwesomeIcon icon={faCoffee***REMOVED*** size="2x" style={{ color: '#fff' ***REMOVED******REMOVED*** />
            <h1 className="title">Login</h1>
            <form action="/login" onSubmit={handleSubmit(onSubmit)***REMOVED*** method="POST">
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
                    className="input is-large"
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={register***REMOVED***
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <input
                    className="input is-large"
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    ref={register***REMOVED***
                  />
                </Control>
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
              <Field>
                <Control>
                  <input
                    className={confirmInputClasses***REMOVED***
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    ref={register({
                      required: true,
                      validate: (value) => {
                        return value === watch('password');
                      ***REMOVED***
                    ***REMOVED***)***REMOVED***
                  />
                </Control>
                {errors.confirm && (
                  <Help isColor="danger" className="has-text-left">Passwords must match</Help>
                )***REMOVED***
              </Field>
              <button className="button is-block is-info is-large is-fullwidth">Login</button>
            </form>
          </Box>
        </Column>
      </Container>
    </HeroBody>
  )
***REMOVED***