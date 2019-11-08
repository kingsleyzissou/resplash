import React from 'react';
import { storiesOf } from '@storybook/react';
import { AddCollectionForm } from '../src/components'
import '../src/App.scss'

const stories = storiesOf('Resplash Add Collection Form component', module);

stories.add("default", () => (
  <AddCollectionForm />
));