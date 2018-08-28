import React from 'react';

export default ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{ name }</h1>
      <h2>{ animal }</h2>
      <h2>{ breed }</h2>
    </div>
  );
};
