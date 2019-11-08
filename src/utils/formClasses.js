import classNames from 'classnames'

const inputClasses = (field, errors) => {
  return classNames({
    'input': true,
    'is-large': true,
    'is-danger': errors[field],
  });
}

const textareaClasses = (field, errors) => {
  return classNames({
    'textarea': true,
    'is-large': true,
    'is-danger': errors[field],
  });
}

const selectClasses = (field, errors) => {
  return classNames({
    'select': true,
    'is-fullwidth': true,
    'is-large': true,
    'is-danger': errors[field],
  });
}

export { inputClasses, textareaClasses, selectClasses }