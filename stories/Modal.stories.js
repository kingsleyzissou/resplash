import React, { Fragment ***REMOVED*** from 'react';
import { withKnobs, boolean ***REMOVED*** from '@storybook/addon-knobs';
import { action ***REMOVED*** from '@storybook/addon-actions';
import { storiesOf ***REMOVED*** from '@storybook/react';
import Modal from '../src/components/Modal'
import '../src/App.scss'

const stories = storiesOf('Resplash Modal component', module);
stories.addDecorator(withKnobs);

stories.add("default", () => (
  <Fragment>
    <h1>Use knobs add-on to trigger modal</h1>
    <Modal
      active={boolean('active', false)***REMOVED***
      handleClose={action('hello')***REMOVED***
      Component={() => <h1>Hello there</h1>***REMOVED***
    />
  </Fragment>
));