import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Results from './pages/results';
import Details from './pages/details';

const App = () => (
  <div>
    <header>
      <Link to="/">
        Adopt Me!
      </Link>
    </header>
    <Router>
      <Results path="/" />
      <Details path="/details/:id" />
    </Router>
  </div>
);

const root = document.getElementById('root');
render(<App />, root);
