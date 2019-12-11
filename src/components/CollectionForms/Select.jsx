import React, { Fragment } from 'react'
import useForm from 'react-hook-form'
import { Field, Control, Button, Help } from 'bloomer'
import { selectClasses } from '../../utils/formClasses'

const SelectForm = ({ collections, selectCollection, close }) => {
  const { register, handleSubmit, errors, reset } = useForm()

  const submitForm = (data) => {
    selectCollection(data)
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
      <h1 className="title">Choose Collection</h1>
      <hr />
      <Field style={{ marginBottom: '5px' }}>
        <Control>
          <select
            className={selectClasses('collection', errors)}
            type="text"
            name="collection"
            placeholder="Choose a collection"
            autoFocus=""
            ref={register({
              required: true
            })}
          >
            {
              collections
              && collections.map((collection, index) => {
                return <option
                  key={index}
                  value={collection._id}
                >
                  {collection.name}
                </option>
              })
            }
          </select>
        </Control>
        {errors.collection && (
          <Help isColor="danger" className="has-text-left">{errors.collection.message}</Help>
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

export default SelectForm