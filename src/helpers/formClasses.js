import classNames from 'classnames'

const emailInputClasses = (errors) => {
  return classNames({
    'input': true,
    'is-large': true,
    'is-danger': errors.email,
  ***REMOVED***);
***REMOVED***

const passwordInputClasses = (errors) => {
  return classNames({
    'input': true,
    'is-large': true,
    'is-danger': errors.password,
  ***REMOVED***);
***REMOVED***

const confirmPasswordInputClasses = (errors) => {
  return classNames({
    'input': true,
    'is-large': true,
    'is-danger': errors.confirm,
  ***REMOVED***);
***REMOVED***

export { emailInputClasses, passwordInputClasses, confirmPasswordInputClasses ***REMOVED***