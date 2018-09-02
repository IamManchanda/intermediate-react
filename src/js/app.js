import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Provider as SearchContextProvider } from './store/search-context';
import petfinder from './utils/petfinder';
import Navbar from './components/navbar';
import Results from './pages/results';
import Details from './pages/details';
import Search from './pages/search';

export default class App extends Component {
  constructor(props) {
    super(props);

    const { getBreeds, handleLocationChange, handleAnimalChange, handleBreedChange } = this;
    this.state = {
      location: 'Seattle, WA',
      animal: '',
      breed: '',
      breeds: [],
      getBreeds,
      handleLocationChange,
      handleAnimalChange,
      handleBreedChange,
    };
  }

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
    return (
      <React.Fragment>
        <Navbar />
        <SearchContextProvider value={ this.state }>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <Search path="/search" />
          </Router>
        </SearchContextProvider>
      </React.Fragment>
    );
  }
}
