import React from 'react';
import Loadable from 'react-loadable';
import Modal from './shared/modal';

const LoadableModalContent = Loadable({
  loader: () => import('./adopt-pet-modal-content'),
  loading: () => <h2>Loading the Modal...</h2>,
});

export default ({ name, toggleModal }) => (
  <Modal>
    <LoadableModalContent name={name} toggleModal={toggleModal} />
  </Modal>
);
