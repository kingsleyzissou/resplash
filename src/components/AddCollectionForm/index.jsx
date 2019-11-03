import React, { Fragment ***REMOVED*** from 'react'
import useForm from 'react-hook-form'
import { Field, Control, Button, Help ***REMOVED*** from 'bloomer'
import { inputClasses, textareaClasses ***REMOVED*** from '../../helpers/formClasses'

export default ({ addCollection, close ***REMOVED***) => {
  const { register, handleSubmit, errors, reset ***REMOVED*** = useForm()

  const submitForm = (data) => {
    addCollection(data)
    clear()
    close()
  ***REMOVED***

  const cancel = () => {
    clear()
    close()
  ***REMOVED***

  const clear = () => {
    reset({
      'name': '',
      'description': ''
    ***REMOVED***)
  ***REMOVED***

  return (
    <Fragment>
      <h1 className="title">Add Collection</h1>
      <hr />
      <Field>
        <Control>
          <input
            className={inputClasses('name', errors)***REMOVED***
            type="text"
            name="name"
            placeholder="Name"
            autoFocus=""
            ref={register({
              required: true
            ***REMOVED***)***REMOVED***
          />
        </Control>
        {errors.name && (
          <Help isColor="danger" className="has-text-left">{errors.name.message***REMOVED***</Help>
        )***REMOVED***
      </Field>
      <Field>
        <Control>
          <textarea
            className={textareaClasses('name', errors)***REMOVED***
            name="description"
            placeholder="Description"
            ref={register({
              required: true
            ***REMOVED***)***REMOVED***
          />
        </Control>
        {errors.description && (
          <Help isColor="danger" className="has-text-left">{errors.description.message***REMOVED***</Help>
        )***REMOVED***
      </Field>
      <Field>
        <Button className="is-danger is-pulled-left" onClick={cancel***REMOVED***>Cancel</Button>
      </Field>
      <Field>
        <Button className="is-info is-pulled-right" onClick={handleSubmit(submitForm)***REMOVED***>Submit</Button>
      </Field>
    </Fragment>
  )
***REMOVED***