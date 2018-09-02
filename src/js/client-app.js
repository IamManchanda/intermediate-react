import React from 'react';
import { hydrate } from 'react-dom';
import App from './app';

/* Grab App Root & Hydrate it into the `App` */
const appRoot = document.getElementById('app');
hydrate(<App />, appRoot);
