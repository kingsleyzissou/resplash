import React from 'react'
import useForm from 'react-hook-form'
import classNames from 'classnames'
import { FontAwesomeIcon ***REMOVED*** from "@fortawesome/react-fontawesome";
import { faCoffee ***REMOVED*** from "@fortawesome/free-solid-svg-icons";
import Navbar from '../../components/Navbar'

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
    <section className="hero is-info is-fullheight" style={{ overflow: 'scroll' ***REMOVED******REMOVED***>
      <Navbar />
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <div className="box login-form" >
              <FontAwesomeIcon icon={faCoffee***REMOVED*** size="2x" style={{ color: '#fff' ***REMOVED******REMOVED*** />
              <h1 className="title">Login</h1>
              <form action="/login" onSubmit={handleSubmit(onSubmit)***REMOVED*** method="POST">
                <div className="field">
                  <div className="control">
                    <input
                      className={emailInputClasses***REMOVED***
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoFocus=""
                      ref={register({ required: true ***REMOVED***)***REMOVED***
                    />
                  </div>
                  {errors.email && (
                    <p className="help is-danger has-text-left">Please enter email</p>
                  )***REMOVED***
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="text"
                      name="name"
                      placeholder="Name"
                      ref={register***REMOVED***
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      ref={register***REMOVED***
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className={pwInputClasses***REMOVED***
                      type="password"
                      name="password"
                      placeholder="Password"
                      ref={register({ required: true ***REMOVED***)***REMOVED***
                    />
                  </div>
                  {errors.password && (
                    <p className="help is-danger has-text-left">Please enter password</p>
                  )***REMOVED***
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className={confirmInputClasses***REMOVED***
                      type="password"
                      name="confirm"
                      placeholder="Confirm Password"
                      ref={register({
                        required: true,
                        validate: (value) => {
                          return value === watch('password'); // value is from password2 and watch will return value from password1
                        ***REMOVED***
                      ***REMOVED***)***REMOVED***
                    />
                  </div>
                  {errors.confirm && (
                    <p className="help is-danger has-text-left">Passwords must match</p>
                  )***REMOVED***
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
***REMOVED***