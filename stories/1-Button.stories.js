import React from 'react';
import { action ***REMOVED*** from '@storybook/addon-actions';
import { Button ***REMOVED*** from '@storybook/react/demo';

***REMOVED***
  title: 'Button',
***REMOVED***;

export const text = () => <Button onClick={action('clicked')***REMOVED***>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')***REMOVED***>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
