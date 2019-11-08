import React, { Fragment } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Alert } from '../src/components'
import '../src/App.scss'

const stories = storiesOf('Resplash Alert component', module);
stories.addDecorator(withKnobs);

stories.add("success", () => (
  <Fragment>
    <h1>Use knobs add-on to trigger modal</h1>
    <Alert
      active={boolean('active', false)}
      handleClose={action('hello')}
      success={true}
      message="This action was successful"
    />
  </Fragment>
));

stories.add("error", () => (
  <Fragment>
    <h1>Use knobs add-on to trigger modal</h1>
    <Alert
      active={boolean('active', false)}
      handleClose={action('hello')}
      success={false}
      message="This action was unsuccessful"
    />
  </Fragment>
));