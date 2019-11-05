import React from 'react'

export default (props) => {
  const handleClick = (e) => {
    e.preventDefault()
    props.handleClick(props)
  }
  return (
    <figure
      onClick={handleClick}
      className="image"
    >
      <img src={props.src} alt={props.alt_description} />
    </figure>
  )
}