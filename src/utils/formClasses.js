import classNames from 'classnames'

const inputClasses = (field, errors) => {
  return classNames({
    'input': true,
    'is-large': true,
    'is-danger': errors[field],
  ***REMOVED***);
***REMOVED***

const textareaClasses = (field, errors) => {
  return classNames({
    'textarea': true,
    'is-large': true,
    'is-danger': errors[field],
  ***REMOVED***);
***REMOVED***

export { inputClasses, textareaClasses ***REMOVED***