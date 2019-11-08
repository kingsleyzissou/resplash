import React from 'react';
import './Collection.scss';
import { Button } from 'bloomer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit as Edit, faTrash as Trash } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  let image = (props.image) ? props.image : '/placeholder.jpg'
  let alt = (props.alt) ? props.alt : 'Placeholder'

  const showCollection = () => {
    const { id } = props
    props.showCollection({ id })
  }

  const handleModal = (modal) => {
    const { id, name, subtitle, description } = props
    props.setData({ id, name, subtitle, description })
    if (modal === 'editModal')
      props.openEditModal()
    if (modal === 'deleteModal')
      props.openDeleteModal()
  }

  return (
    <figure className="collection">
      <span className="caption">
        <h1 className="caption-title">{props.name}</h1>
        <p className="caption-subtitle">{props.subtitle}</p>
      </span>
      <div className="buttons">
        <Button
          isSize={'small'}
          isColor={'link'}
          className="collection-button"
          onClick={() => handleModal('editModal')}
        >
          <FontAwesomeIcon icon={Edit} size="1x" />
        </Button>
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
        onClick={showCollection}
      >
      </span>
      <img src={image} alt={alt} />
    </figure>
  )

}