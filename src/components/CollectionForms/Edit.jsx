import React, { Fragment } from 'react'
import useForm from 'react-hook-form'
import { Field, Control, Button, Help } from 'bloomer'
import { inputClasses, textareaClasses } from '../../utils/formClasses'

export default ({ data, editCollection, close }) => {
  const { _id, name, subtitle, description } = data
  const { register, handleSubmit, errors, reset } = useForm()

  const submitForm = (data) => {
    data._id = _id
    editCollection(data)
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
      <h1 className="title">Edit Collection</h1>
      <hr />
      <Field>
        <Control>
          <input
            className={inputClasses('name', errors)}
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={name}
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
          <input
            className={inputClasses('subtitle', errors)}
            type="text"
            name="subtitle"
            placeholder="Subtitle"
            defaultValue={subtitle}
            autoFocus=""
            ref={register({
              required: true
            })}
          />
        </Control>
        {errors.subtitle && (
          <Help isColor="danger" className="has-text-left">{errors.subtitle.message}</Help>
        )}
      </Field>
      <Field>
        <Control>
          <textarea
            className={textareaClasses('name', errors)}
            name="description"
            placeholder="Description"
            defaultValue={description}
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
        <Button className="is-info is-pulled-right" onClick={handleSubmit(submitForm)}>Edit</Button>
      </Field>
    </Fragment>
  )
}