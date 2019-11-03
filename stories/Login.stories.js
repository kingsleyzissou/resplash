import React from 'react';
import { storiesOf ***REMOVED*** from '@storybook/react';
import LoginForm from '../src/components/LoginForm'
import '../src/App.scss'

const stories = storiesOf('Resplash Login Form component', module);

const later = new Promise((resolve) => {
  setTimeout(resolve, 200);
***REMOVED***);

const auth = {
  login() {
    return later
  ***REMOVED***,
  googleLogin() {
    return later
  ***REMOVED***
***REMOVED***

stories.add("default", () => (
  <LoginForm auth={auth***REMOVED*** />
));