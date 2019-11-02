import React from 'react';
import './Collection.scss';

export default (props) => {
  let image = (props.image) ? props.image : '/placeholder.jpg'
  let alt = (props.alt) ? props.alt : 'Placeholder'
  return (
    <figure className="collection">
      <span className="caption">
        <h1 className="caption-title">{props.name***REMOVED***</h1>
        <p className="caption-subtitle">{props.subtitle***REMOVED***</p>
      </span>
      <span className="overlay"></span>
      <img src={image***REMOVED*** alt={alt***REMOVED*** />
    </figure>
  )

***REMOVED***