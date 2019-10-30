import React from 'react'
import {
  Modal, ModalBackground, ModalContent, ModalClose,
  Card, CardContent, Content, CardImage, Image,
***REMOVED*** from 'bloomer'

export default (props) => {
  return (
    <Modal isActive={props.active***REMOVED***>
      <ModalBackground onClick={props.handleClose***REMOVED*** />
      <ModalContent>
        <Card>
          <CardImage>
            <Image isRatio='4:3' src={props.src***REMOVED*** />
          </CardImage>
          <CardContent>
            <Content>
              {props.description***REMOVED***
            </Content>
          </CardContent>
        </Card>
      </ModalContent>
      <ModalClose onClick={props.handleClose***REMOVED*** />
    </Modal>
  )
***REMOVED***