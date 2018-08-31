import React from 'react';
import { navigate } from '@reach/router';
import SearchBox from '../components/search-box';

export default () => {
  const handleSearchSubmit = () => {
    navigate('/');
  };
  
  return (
    <div className="search-route">
      <SearchBox search={ handleSearchSubmit } />
    </div>
  );
};
