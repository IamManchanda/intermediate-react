import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <header>
    <Link to="/">
      Adopt Pets!
    </Link>
    <Link to="/search" className="search-link">
      <span aria-label="search" role="img">
        🔍
      </span>
    </Link>
  </header>
);
