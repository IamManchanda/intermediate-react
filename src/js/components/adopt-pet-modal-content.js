import React from 'react';

export default ({ name, toggleModal }) => (
  <React.Fragment>
    <h1>Would you like to adopt {name}?</h1>
    <div className="buttons">
      <button type="button" onClick={toggleModal}>Yes</button>
      <button type="button" onClick={toggleModal}>No</button>
    </div>
  </React.Fragment>
);
