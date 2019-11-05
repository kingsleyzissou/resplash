import React from 'react'
import {
  Modal, ModalBackground, ModalContent, ModalCardBody, ModalClose
} from 'bloomer'

export default ({ className, active, handleClose, Component, ...rest }) => {
  return (
    <Modal isActive={active} className={className}>
      <ModalBackground onClick={handleClose} />
      <ModalContent>
        <ModalCardBody>
          <Component rest={rest} />
        </ModalCardBody>
      </ModalContent>
      <ModalClose onClick={handleClose} />
    </Modal>
  )
}