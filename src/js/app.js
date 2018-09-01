import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import Loadable from 'react-loadable';
import { Provider as SearchContextProvider } from './store/search-context';
import petfinder from './utils/petfinder';
import Navbar from './components/navbar';

/* Grab App Root */
const appRoot = document.getElementById('app');

/* Code Splitting and Page Loading only when required */
const loadingContent = <h1>Loading the Page...</h1>;
const LoadableResults = Loadable({
  loader: () => import('./pages/results'),
  loading: () => loadingContent,
});
const LoadableDetails = Loadable({
  loader: () => import('./pages/details'),
  loading: () => loadingContent,
});
const LoadableSearch = Loadable({
  loader: () => import('./pages/search'),
  loading: () => loadingContent,
});

/* 3:57:30 - window doesn't exist node */
class App extends Component {
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
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearch path="/search" />
          </Router>
        </SearchContextProvider>
      </React.Fragment>
    );
  }
}

render(<App />, appRoot);
