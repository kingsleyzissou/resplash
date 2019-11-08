import React, { Fragment } from 'react'
import {
  Columns, Column, Modal, ModalBackground, ModalContent, ModalClose,
  Card, CardContent, Content, CardImage
} from 'bloomer'
import './Check.scss'
import Check from './Check'
import Cross from './Cross'

export default (props) => {
  return (
    <Modal className="modal-fx-3dSlit" isActive={props.active}>
      <ModalBackground onClick={props.handleClose} />
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