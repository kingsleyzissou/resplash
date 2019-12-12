import React from 'react';
import { storiesOf } from '@storybook/react';
import { CommentForm } from '../src/components'
import '../src/App.scss'

const stories = storiesOf('Resplash Comment Form component', module);

stories.add("default", () => (
  <CommentForm />
));