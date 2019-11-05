import React, { Fragment } from 'react'
import useForm from 'react-hook-form'
import { Field, Control, Button, Help } from 'bloomer'
import { inputClasses, textareaClasses } from '../../utils/formClasses'

export default ({ addCollection, close }) => {
  const { register, handleSubmit, errors, reset } = useForm()

  const submitForm = (data) => {
    addCollection(data)
    clear()
    close()
  }

  const cancel = () => {
    clear()
    close()
  }

  const clear = () => {
    reset({
      'name': '',
      'description': ''
    })
  }

  return (
    <Fragment>
      <h1 className="title">Add Collection</h1>
      <hr />
      <Field>
        <Control>
          <input
            className={inputClasses('name', errors)}
            type="text"
            name="name"
            placeholder="Name"
            autoFocus=""
            ref={register({
              required: true
            })}
          />
        </Control>
        {errors.name && (
          <Help isColor="danger" className="has-text-left">{errors.name.message}</Help>
        )}
      </Field>
      <Field>
        <Control>
          <textarea
            className={textareaClasses('name', errors)}
            name="description"
            placeholder="Description"
            ref={register({
              required: true
            })}
          />
        </Control>
        {errors.description && (
          <Help isColor="danger" className="has-text-left">{errors.description.message}</Help>
        )}
      </Field>
      <Field>
        <Button className="is-danger is-pulled-left" onClick={cancel}>Cancel</Button>
      </Field>
      <Field>
        <Button className="is-info is-pulled-right" onClick={handleSubmit(submitForm)}>Submit</Button>
      </Field>
    </Fragment>
  )
}