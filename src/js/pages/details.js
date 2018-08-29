import React, { Component } from 'react';
import { navigate } from '@reach/router';
import petfinder from '../utils/petfinder';

class Details extends Component {
  state = {
    loading: true,
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

  render() {
    const { name, animal, breed, location, description, loading } = this.state;
    if (loading) return <h1 className="loading">Loading...</h1>;
    return (
      <div className="details">
        <div>
          <h1>{ name }</h1>
          <h2>{ `${animal} -- ${breed} -- ${location}` }</h2>
          <p>{ description }</p>
        </div>
      </div>
    );
  }
}

export default Details;
