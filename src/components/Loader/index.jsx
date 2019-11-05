import React, { Fragment } from 'react'
import Triangle from 'react-loader-spinner'
import { Columns, Column } from 'bloomer'
import Modal from '../Modal'

export default ({ fullPage, loading }) => {

  if (!fullPage) return (
    <Fragment>
      <Triangle
        type="Triangle"
        color="#00BFFF"
        height={200}
        width={200}
      />
      <h1>Loading...</h1>
    </Fragment>
  )

  return (
    <Modal
      active={loading}
      handleClose={() => console.log('close')}
      className="modal-fx-fadeInScale modal-full-screen"
      Component={() => {
        return (
          <Columns className="is-vcentered" style={{ height: '100vh', width: '100vw' }}>
            <Column className="has-text-centered">
              <Triangle
                type="Triangle"
                color="#00BFFF"
                height={200}
                width={200}
              />
              <h1>Loading...</h1>
            </Column>
          </Columns>
        )
      }
      }
    />
  )

}