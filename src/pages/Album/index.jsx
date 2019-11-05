import React, { useState, Fragment } from 'react'
import { Column } from 'bloomer'
// import Masonry from 'react-mason'
import Image from '../../components/Image'
import Lightbox from '../../components/Lightbox';
import { Columns } from 'bloomer/lib/grid/Columns';

export default () => {

  const [lightbox, setLightbox] = useState({
    active: false,
    src: 1
  });

  const images = [
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/480x480.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    },
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/256x256.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    },
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/640x480.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    },
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/480x480.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    },
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/128x128.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    },
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/128x128.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    },
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/256x256.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    },
    {
      title: 'Sample text',
      subtitle: 'Sample sub',
      image: 'https://bulma.io/images/placeholders/640x480.png',
      alt: 'Description',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis aut corporis ad iste neque! Voluptate, repellat eligendi! Numquam natus sequi fugiat architecto quibusdam praesentium quasi vero nesciunt culpa earum.'
    },
  ];

  const handleClick = (image) => {
    setLightbox({
      active: !lightbox.active,
      src: image.src,
      description: image.description
    })
  }

  const handleClose = () => {
    setLightbox({
      active: false,
      src: '',
      description: ''
    })
  }

  const grid = images.map((image, index) => {
    return (
      <Column isSize={{ mobile: 8, default: 4 }} isMarginless>
        <Image
          handleClick={handleClick}
          src={image.image}
          alt={image.alt}
          key={index}
          index={index}
          description={image.description}
        />
      </Column>
    )
  });

  // Required for the lightbox component
  // const srcs = images.map((image) => image.image);

  return (
    <Fragment>
      <Lightbox
        active={lightbox.active}
        src={lightbox.src}
        description={lightbox.description}
        handleClose={handleClose}
      />
      <Columns isMultiline>
        {grid}
      </Columns>
    </Fragment>
  )

}
