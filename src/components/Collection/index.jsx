import React, { useContext } from 'react';
import './Collection.scss';
import { Button } from 'bloomer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit as Edit, faTrash as Trash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '../../services/auth';

export default (props) => {
  let Auth = useContext(AuthContext)
  let user = Auth.getCurrentUser()
  let src = (props.src) ? props.src : '/placeholder.jpg'
  let alt = (props.alt) ? props.alt : 'Placeholder'

  const showAction = () => {
    const { _id, image } = props
    let ref = (props.type === 'collection') ? { _id } : { image };
    props.showAction(ref)
  }

  const handleModal = (modal) => {
    if (props.type === 'collection') collectionModal(modal)
    else imageModal()
  }

  const collectionModal = (modal) => {
    const { _id, name, subtitle, description } = props
    props.setData({ _id, name, subtitle, description })
    if (modal === 'editModal')
      props.openEditModal()
    if (modal === 'deleteModal')
      props.openDeleteModal()
  }

  const imageModal = () => {
    showAction()
  }

  console.log(props.user)

  return (
    <div className="collection">
      <span className="caption">
        <h1 className="caption-title">{props.name}</h1>
        <p className="caption-subtitle">@{props.user.username}</p>
      </span>
      {
        (user._id === props.user._id) &&
        <div className="buttons">
          {
            props.type === 'collection' &&
            <Button
              isSize={'small'}
              isColor={'link'}
              className="collection-button"
              onClick={() => handleModal('editModal')}
            >
              <FontAwesomeIcon icon={Edit} size="1x" />
            </Button>
          }
          <Button
            isSize={'small'}
            isColor={'danger'}
            className="collection-button"
            onClick={() => handleModal('deleteModal')}
          >
            <FontAwesomeIcon icon={Trash} size="1x" />
          </Button>
        </div>
      }
      <span className="overlay"
        onClick={showAction}
      >
      </span>
      <img src={src} alt={alt} className="collection-image" />
    </div>
  )

}