import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoginForm } from '../src/components'
import '../src/App.scss'

const stories = storiesOf('Resplash Login Form component', module);

const later = new Promise((resolve) => {
  setTimeout(resolve, 200);
});

const auth = {
  login() {
    return later
  },
  googleLogin() {
    return later
  }
}

stories.add("default", () => (
  <LoginForm auth={auth} />
));