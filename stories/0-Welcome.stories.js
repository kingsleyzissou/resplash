import React from 'react';
import { linkTo ***REMOVED*** from '@storybook/addon-links';
import { Welcome ***REMOVED*** from '@storybook/react/demo';

***REMOVED***
  title: 'Welcome',
***REMOVED***;

export const toStorybook = () => <Welcome showApp={linkTo('Button')***REMOVED*** />;

toStorybook.story = {
  name: 'to Storybook',
***REMOVED***;
