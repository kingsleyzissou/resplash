import React from 'react';
import { storiesOf } from '@storybook/react';
import { Comment } from '../src/components'
import '../src/App.scss'

const stories = storiesOf('Resplash Comment component', module);

const comment = {
  comment: 'The quick brown fox jumped over the lazy dog',
  user: {
    name: 'Joe',
    username: 'jjoe'
  },
  comments: [
    {
      comment: 'The quick brown fox jumped over the lazy dog',
      user: {
        name: 'Jared',
        username: 'jjared'
      },
    },
    {
      comment: 'The quick brown fox jumped over the lazy dog',
      user: {
        name: 'Sue',
        username: 'ssue'
      },
    }
  ]
}

stories.add("default", () => (
  <Comment comment={comment} />
));