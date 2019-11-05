import React from 'react'
import {
  Modal, ModalBackground, ModalContent, ModalClose,
  Card, CardContent, Content, CardImage,
  CardFooter
} from 'bloomer'
import './Lightbox.scss'

export default (props) => {
  return (
    <Modal className="modal-fx-3dSlit" isActive={props.active}>
      <ModalBackground onClick={props.handleClose} />
      <ModalContent className="is-tiny">
        <Card>
          <CardImage>
            <figure>
              <img src={props.src} alt={props.alt} style={{ width: '400px', height: '300px', objectFit: 'cover' }} />
            </figure>
          </CardImage>
          <CardContent>
            {
              (props.description) &&
              <Content>
                {props.description}
              </Content>
            }
            Image by:
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={props.user.profile_image.medium} alt="avatar" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{props.user.name}</p>
                <p className="subtitle is-6">@{props.user.username}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {
              (props.fromSearch) ?
                (< p
                  className="card-footer-item"
                  style={{
                    color: '#fff',
                    backgroundColor: 'hsl(204, 86%, 53%)'
                  }}
                >
                  +Add to collection
                  </p>) :
                (< p
                  className="card-footer-item"
                  style={{
                    color: '#fff',
                    backgroundColor: 'hsl(348, 100%, 61%)'
                  }}
                >
                  Remove from collection
                </p>)
            }
          </CardFooter>
        </Card>
      </ModalContent>
      <ModalClose onClick={props.handleClose} />
    </Modal >
  )
}