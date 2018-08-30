import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Results from './pages/results';
import Details from './pages/details';
import SearchParams from './pages/search-params';

/* 3:26:00 */
const App = () => (
  <div>
    <header>
      <Link to="/">
        Adopt Pets!
      </Link>
    </header>
    <Router>
      <Results path="/" />
      <Details path="/details/:id" />
      <SearchParams path="/search-params" />
    </Router>
  </div>
);

const root = document.getElementById('root');
render(<App />, root);
