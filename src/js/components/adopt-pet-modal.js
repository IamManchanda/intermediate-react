import React from 'react';
import Modal from './shared/modal';

export default ({ name, toggleModal }) => (
  <Modal>
    <h1>Would you like to adopt {name}?</h1>
    <div className="buttons">
      <button type="button" onClick={toggleModal}>Yes</button>
      <button type="button" onClick={toggleModal}>No</button>
    </div>
  </Modal>
);
