import React, { Component ***REMOVED*** from 'react'
import { Columns, Column ***REMOVED*** from 'bloomer'
import Collection from '../../components/Collection'

class Gallery extends Component {

  render() {

    const collections = this.props.images.map((image, index) => {
      return (
        <Column key={index***REMOVED***>
          <Collection
            title={image.title***REMOVED***
            subtitle={image.subtitle***REMOVED***
            image={image.image***REMOVED***
            alt={image.alt***REMOVED***
          />
        </Column>
      )
    ***REMOVED***);

    return (
      <Columns>
        {collections***REMOVED***
      </Columns>
    )

  ***REMOVED***

***REMOVED***

export default Gallery;