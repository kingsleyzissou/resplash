import React, { Fragment, useEffect, useState } from 'react'
import {
  Columns, Column, Modal, ModalBackground, ModalContent, ModalClose,
  Card, CardContent, Content, CardImage
} from 'bloomer'
import './Check.scss'
import Check from './Check'
import Cross from './Cross'

export default (props) => {
  const [mounted, setMounted] = useState(false)
  const { active, handleClose } = props

  useEffect(() => {
    setMounted(true)
    const autoClose = () => {
      if (active) {
        setTimeout(() => {
          handleClose()
        }, 3000)
      }
    }
    if (mounted) {
      autoClose()
    }
    return () => {
      setMounted(false)
    }
  }, [active, handleClose, mounted, setMounted])

  return (
    <Modal className="modal-fx-3dSlit" isActive={active}>
      <ModalBackground onClick={handleClose} />
      <ModalContent className="is-tiny">
        <Card>
          <CardImage>
            <figure />
          </CardImage>
          <CardContent>
            <Content>
              <Columns isVCentered style={{ height: '300px' }}>
                <Column hasTextAlign={'centered'}>
                  {
                    (props.success) ? (
                      <Fragment>
                        <Check />
                        <h1 className="title">Success!</h1>
                        <p className="subtitle">{props.message}</p>
                      </Fragment>
                    ) : (
                        <Fragment>
                          <Cross />
                          <h1 className="title">Error!</h1>
                          <p className="subtitle">{props.message}</p>
                        </Fragment>
                      )
                  }
                </Column>
              </Columns>
            </Content>
          </CardContent>
        </Card>
      </ModalContent>
      <ModalClose onClick={props.handleClose} />
    </Modal >
  )
}