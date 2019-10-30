import React, { useState, Fragment ***REMOVED*** from 'react'
import { Column ***REMOVED*** from 'bloomer'
// import Masonry from 'react-mason'
import Image from '../../components/Image'
import Lightbox from '../../components/Lightbox';
import { Columns ***REMOVED*** from 'bloomer/lib/grid/Columns';

export default () => {

  const [lightbox, setLightbox] = useState({
    active: false,
    src: 1
  ***REMOVED***);

  const images = [
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/480x480.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    ***REMOVED***,
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/256x256.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    ***REMOVED***,
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/640x480.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    ***REMOVED***,
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/480x480.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    ***REMOVED***,
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/128x128.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    ***REMOVED***,
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/128x128.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    ***REMOVED***,
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/256x256.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    ***REMOVED***,
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/640x480.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    ***REMOVED***,
  ];

  const handleClick = (image) => {
    setLightbox({
      active: !lightbox.active,
      src: image.src,
      description: image.description
    ***REMOVED***)
  ***REMOVED***

  const handleClose = () => {
    setLightbox({
      active: false,
      src: '',
      description: ''
    ***REMOVED***)
  ***REMOVED***

  const grid = images.map((image, index) => {
    return (
      <Column isSize={{ mobile: 8, default: 4 ***REMOVED******REMOVED*** isMarginless>
        <Image
          handleClick={handleClick***REMOVED***
          src={image.image***REMOVED***
          alt={image.alt***REMOVED***
          key={index***REMOVED***
          index={index***REMOVED***
          description={image.description***REMOVED***
        />
      </Column>
    )
  ***REMOVED***);

  // Required for the lightbox component
  // const srcs = images.map((image) => image.image);

  return (
    <Fragment>
      <Lightbox
        active={lightbox.active***REMOVED***
        src={lightbox.src***REMOVED***
        description={lightbox.description***REMOVED***
        handleClose={handleClose***REMOVED***
      />
      <Columns isMultiline>
        {grid***REMOVED***
      </Columns>
    </Fragment>
  )

***REMOVED***
