import React from 'react'
import { storiesOf ***REMOVED*** from '@storybook/react';
import Gallery from '../src/pages/Gallery'
import '../src/App.scss'

const images = [
  {
    key: 1,
    title: 'Sample text',
    subtitle: 'Sample sub',
    image: 'https://bulma.io/images/placeholders/480x480.png',
    alt: 'Description'
  ***REMOVED***,
  {
    key: 2,
    title: 'Sample text',
    subtitle: 'Sample sub',
    image: 'https://bulma.io/images/placeholders/480x480.png',
    alt: 'Description'
  ***REMOVED***,
  {
    key: 3,
    title: 'Sample text',
    subtitle: 'Sample sub',
    image: 'https://bulma.io/images/placeholders/480x480.png',
    alt: 'Description'
  ***REMOVED***
];

storiesOf('Resplash Gallery page', module).add('default', () => (
  <Gallery images={images***REMOVED*** />
));