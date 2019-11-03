import React from 'react';
import { storiesOf ***REMOVED*** from '@storybook/react';
import AddCollectionForm from '../src/components/AddCollectionForm'
import '../src/App.scss'

const stories = storiesOf('Resplash Add Collection Form component', module);

stories.add("default", () => (
  <AddCollectionForm />
));