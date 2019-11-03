import React, { Fragment ***REMOVED*** from 'react';
import { withKnobs, boolean ***REMOVED*** from '@storybook/addon-knobs';
import { storiesOf ***REMOVED*** from '@storybook/react';
import Lightbox from '../src/components/Lightbox'
import '../src/App.scss'

const stories = storiesOf('Resplash Lightbox component', module);
stories.addDecorator(withKnobs);

const image = {
  title: 'Sample text',
  subtitle: 'Sample sub',
  src: 'https://bulma.io/images/placeholders/480x480.png',
  alt: 'Description',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`
***REMOVED***

stories.add("default", () => (
  <Fragment>
    <h1>Use knobs add-on to trigger lightbox</h1>
    <Lightbox
      active={boolean('active', false)***REMOVED***
      src={image.src***REMOVED***
      description={image.description***REMOVED***
    />
  </Fragment>
));