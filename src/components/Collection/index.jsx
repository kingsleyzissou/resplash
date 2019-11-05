import React from 'react';
import './Collection.scss';

export default (props) => {
  let image = (props.image) ? props.image : '/placeholder.jpg'
  let alt = (props.alt) ? props.alt : 'Placeholder'
  return (
    <figure className="collection">
      <span className="caption">
        <h1 className="caption-title">{props.name}</h1>
        <p className="caption-subtitle">{props.subtitle}</p>
      </span>
      <span className="overlay"></span>
      <img src={image} alt={alt} />
    </figure>
  )

}