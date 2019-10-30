import React from 'react'
import { storiesOf ***REMOVED*** from '@storybook/react';
import Collection from '../src/components/Collection'
import '../src/App.scss'

const image = {
  title: 'Sample text',
  subtitle: 'Sample sub',
  image: 'https://bulma.io/images/placeholders/480x480.png',
  alt: 'Description'
***REMOVED***

storiesOf("Resplash Collection component", module).add("default", () => (
  <Collection title={image.title***REMOVED*** subtitle={image.subtitle***REMOVED*** image={image.image***REMOVED*** alt={image.alt***REMOVED*** />
));
