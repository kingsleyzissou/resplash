import React from 'react'
import {
  Modal, ModalBackground, ModalContent, ModalCardBody, ModalClose
***REMOVED*** from 'bloomer'

export default ({ active, handleClose, Component, ...rest ***REMOVED***) => {
  return (
    <Modal isActive={active***REMOVED***>
      <ModalBackground onClick={handleClose***REMOVED*** />
      <ModalContent>
        <ModalCardBody>
          <Component rest={rest***REMOVED*** />
        </ModalCardBody>
      </ModalContent>
      <ModalClose onClick={handleClose***REMOVED*** />
    </Modal>
  )
***REMOVED***