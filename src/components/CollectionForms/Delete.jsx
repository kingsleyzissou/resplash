import React, { Fragment } from 'react'
import { Field, Button } from 'bloomer'

export default ({ id, deleteCollection, close }) => {

  const handleSubmit = () => {
    console.log(id)
    deleteCollection({ id })
    close()
  }

  const cancel = () => {
    close()
  }

  return (
    <Fragment>
      <h1 className="title">Delete Collection</h1>
      <hr />
      <Field>
        <p>Are you sure you want to delete this collection, this cannot be undone?</p>
      </Field>
      <Field>
        <Button className="is-pulled-left" onClick={cancel}>Cancel</Button>
      </Field>
      <Field>
        <Button className="is-danger is-pulled-right" onClick={handleSubmit}>Delete</Button>
      </Field>
    </Fragment>
  )
}