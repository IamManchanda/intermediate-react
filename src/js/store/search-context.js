import React from 'react';

const context = React.createContext({
  location: 'Seattle, WA',
  animal: '',
  breed: '',
  breeds: [],
  getBreeds() {},
  handleLocationChange() {},
  handleAnimalChange() {},
  handleBreedChange() {},
});

export const { Provider, Consumer } = context;
