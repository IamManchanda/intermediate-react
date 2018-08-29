import React, { Component } from 'react';
import Pet from '../components/pet';
import petfinder from '../utils/petfinder';

export default class Results extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    petfinder.pet
      .find({ output: 'full', location: 'Seattle, WA' })
      .then((data) => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) pets = data.petfinder.pets.pet;
          else pets = [data.petfinder.pets.pet];
        } else {
          pets = [];
        }
        this.setState({ pets });
      });
  }
  
  render() {
    const { pets } = this.state;
    return (
      <div className="search">
        { pets.map((pet) => {
          const { name, animal, id, media, contact } = pet;
          let breed;
          if (Array.isArray(pet.breeds.breed)) breed = pet.breeds.breed.join(', ');
          else ({ breed } = pet.breeds);
          return (
            <Pet 
              key={ id }
              id={ id }
              name={ name } 
              animal={ animal } 
              breed={ breed }
              media={ media }
              location={ `${contact.city}, ${contact.state}` }
            />
          );
        }) }
      </div>
    );
  }
}
