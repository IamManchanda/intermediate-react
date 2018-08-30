/* Fix these A11y issue soon */
/* eslint-disable jsx-a11y/label-has-associated-control */ 

import React, { Component } from 'react';
import { ANIMALS } from 'petfinder-client';
import petfinder from '../utils/petfinder';

export default class SearchParams extends Component {
  state = {
    location: '',
    animal: '',
    breed: '',
    breeds: [],
  };

  getBreeds() {
    const { animal } = this.state;
    if (animal) {
      petfinder.breed.list({ animal })
        .then((data) => {
          if (data.petfinder && data.petfinder.breeds && Array.isArray(data.petfinder.breeds.breed)) {
            this.setState({ breeds: data.petfinder.breeds.breed });
          } else this.setState({ breeds: [] });
        });
    } else this.setState({ breeds: [] });
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleAnimalChange = (event) => {
    this.setState({ 
      animal: event.target.value, 
      breed: '', 
    }, this.getBreeds);
  };

  handleBreedChange = (event) => {
    this.setState({ breed: event.target.value });
  };

  render() {
    const { location, animal, breed, breeds } = this.state;
    const animals = ANIMALS;
    return (
      <div className="search-params">
        <form>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text" 
              id="location"
              name="location"
              value={ location }
              onChange={ this.handleLocationChange }
              placeholder="Please enter a location"
            />
          </div>
          <div>
            <label htmlFor="animal">Animal</label>
            <select
              id="animal"
              name="animal"
              value={ animal }
              onChange={ this.handleAnimalChange }
              onBlur={ this.handleAnimalChange }
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
              onChange={ this.handleBreedChange }
              onBlur={ this.handleBreedChange }
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
        </form>
      </div>
    );
  }
}
