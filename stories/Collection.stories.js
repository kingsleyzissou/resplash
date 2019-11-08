import React from 'react'
import { storiesOf } from '@storybook/react';
import { Collection } from '../src/components'
import '../src/App.scss'

const image = {
  title: 'Sample text',
  subtitle: 'Sample sub',
  image: 'https://bulma.io/images/placeholders/480x480.png',
  alt_description: 'Description'
}

storiesOf("Resplash Collection component", module).add("default", () => (
  <Collection title={image.title} subtitle={image.subtitle} image={image.image} alt={image.alt_description} />
));
