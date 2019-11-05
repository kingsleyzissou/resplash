import React from 'react'
import { storiesOf } from '@storybook/react';
import Navbar from '../src/components/Navbar'
import '../src/App.scss'

storiesOf("Resplash Navbar component", module).add("default", () => (
  <Navbar />
));
