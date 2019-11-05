import React, { Component } from 'react'
import { Columns, Column } from 'bloomer'
import Collection from '../../components/Collection'

class Gallery extends Component {

  render() {

    const collections = this.props.images.map((image, index) => {
      return (
        <Column key={index}>
          <Collection
            title={image.title}
            subtitle={image.subtitle}
            image={image.image}
            alt={image.alt_description}
          />
        </Column>
      )
    });

    return (
      <Columns>
        {collections}
      </Columns>
    )

  }

}

export default Gallery;