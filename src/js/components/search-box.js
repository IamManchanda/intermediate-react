/* Fix these A11y issue soon */
/* eslint-disable jsx-a11y/label-has-associated-control */ 

import React from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer as SearchContextConsumer } from '../store/search-context';

export default ({ search }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search();
  };
  
  return (
    <SearchContextConsumer>
      { (searchContext) => {
        const { location, animal, breed, breeds, handleLocationChange, handleAnimalChange, handleBreedChange } = searchContext;
        const animals = ANIMALS;
        return (
          <div className="search-params">
            <form onSubmit={ handleFormSubmit }>
              <div>
                <label htmlFor="location">Location</label>
                <input
                  type="text" 
                  id="location"
                  name="location"
                  value={ location }
                  onChange={ handleLocationChange }
                  placeholder="Please enter a location"
                />
              </div>
              <div>
                <label htmlFor="animal">Animal</label>
                <select
                  id="animal"
                  name="animal"
                  value={ animal }
                  onChange={ handleAnimalChange }
                  onBlur={ handleAnimalChange }
                >
                  <option value="" disabled>Please select a animal</option>
                  { animals.map((currentAnimal) => (
                    <option key={ currentAnimal } value={ currentAnimal }>
                      { currentAnimal }
                    </option>
                  )) }
                </select>
              </div>
              <div>
                <label htmlFor="breed">Breed</label>
                <select
                  id="breed"
                  name="breed"
                  value={ breed }
                  onChange={ handleBreedChange }
                  onBlur={ handleBreedChange }
                  disabled={ breeds.length === 0 }
                >
                  <option value="" disabled>
                    { breeds.length === 0 ? 'Select a animal first to select a breed' : 'Please select a breed' }
                  </option>
                  { breeds.map((currentBreed) => (
                    <option key={ currentBreed } value={ currentBreed }>
                      { currentBreed }
                    </option>
                  )) }
                </select>
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
        );
      } }
    </SearchContextConsumer>
  );
};
