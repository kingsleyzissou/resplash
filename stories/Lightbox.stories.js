import React, { Fragment ***REMOVED*** from 'react';
import { storiesOf ***REMOVED*** from '@storybook/react';
import LoginForm from '../src/components/LoginForm'
import '../src/App.scss'

const stories = storiesOf('Resplash Login Form component', module);

stories.add("default", () => (
  <LoginForm />
));
