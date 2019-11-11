import React from 'react';
import './Collection.scss';
import { Button } from 'bloomer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit as Edit, faTrash as Trash } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  let src = (props.src) ? props.src : '/placeholder.jpg'
  let alt = (props.alt) ? props.alt : 'Placeholder'

  const showAction = () => {
    const { id, image } = props
    let ref = (props.type === 'collection') ? { id } : { image };
    console.log(ref)
    props.showAction(ref)
  }

  const handleModal = (modal) => {
    if (props.type === 'collection') collectionModal(modal)
    else imageModal()
  }

  const collectionModal = (modal) => {
    const { id, name, subtitle, description } = props
    props.setData({ id, name, subtitle, description })
    if (modal === 'editModal')
      props.openEditModal()
    if (modal === 'deleteModal')
      props.openDeleteModal()
  }

  const imageModal = () => {
    showAction()
  }

  return (
    <div className="collection">
      <span className="caption">
        <h1 className="caption-title">{props.name}</h1>
        <p className="caption-subtitle">{props.subtitle}</p>
      </span>
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
      <span className="overlay"
        onClick={showAction}
      >
      </span>
      <img src={src} alt={alt} className="collection-image" />
    </div>
  )

}