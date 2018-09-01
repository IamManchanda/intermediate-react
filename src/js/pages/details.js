import React, { Component } from 'react';
import { navigate } from '@reach/router';
import petfinder from '../utils/petfinder';
import PetImages from '../components/pet-images';
import AdoptPetModal from '../components/adopt-pet-modal';

export default class Details extends Component {
  state = {
    loading: true,
    showModal: false,
  };

  componentDidMount() {
    const { id } = this.props;
    petfinder.pet
      .get({ output: 'full', id })
      .then((data) => {
        const { pet } = data.petfinder;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(', ');
        } else {
          ({ breed } = pet.breeds);
        }
        const { name, animal, contact, description, media } = pet;
        const location = `${contact.city}, ${contact.state}`;
        const loading = false;
        this.setState({ name, animal, location, description, media, breed, loading });
      })
      .catch(() => {
        navigate('/');
      });
  }

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  render() {
    const { name, animal, breed, location, description, loading, media, showModal } = this.state;
    if (loading) return <h2 className="loading">Loading the data...</h2>;

    return (
      <div className="details">
        <div>
          <h1>{ name }</h1>
          <h2>{ `${animal} -- ${breed} -- ${location}` }</h2>
          <button type="button" onClick={ this.toggleModal }>
            Adopt { name }
          </button>
          <p>{ description }</p>
          { showModal ? <AdoptPetModal 
            name={ name } 
            toggleModal={ this.toggleModal } 
          /> : null }
        </div>
        <PetImages media={ media } />
      </div>
    );
  }
}
