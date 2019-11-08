import React, { Fragment } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Modal } from '../src/components'
import '../src/App.scss'

const stories = storiesOf('Resplash Modal component', module);
stories.addDecorator(withKnobs);

stories.add("default", () => (
  <Fragment>
    <h1>Use knobs add-on to trigger modal</h1>
    <Modal
      active={boolean('active', false)}
      handleClose={action('hello')}
      Component={() => <h1>Hello there</h1>}
    />
  </Fragment>
));