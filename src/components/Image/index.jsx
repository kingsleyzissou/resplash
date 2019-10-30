import React from 'react'

export default (props) => {
  const handleClick = (e) => {
    e.preventDefault()
    props.handleClick(props)
  ***REMOVED***
  return (
    <figure
      onClick={handleClick***REMOVED***
      className="image"
    >
      <img src={props.src***REMOVED*** alt={props.alt***REMOVED*** />
    </figure>
  )
***REMOVED***