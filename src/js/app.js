import React, { Component } from 'react';
import { render } from 'react-dom';
import petfinderClient from 'petfinder-client';
import Pet from './components/pet';

const petfinder = petfinderClient({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    };
  }

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
      <div>
        <h1>Adopt Pets</h1>
        <div>
          { pets.map((pet) => {
            const { name, animal, id } = pet;
            let breed;
            if (Array.isArray(pet.breeds.breed)) breed = pet.breeds.breed.join(', ');
            else ({ breed } = pet.breeds);
            return (
              <Pet key={ id } name={ name } animal={ animal } breed={ breed } />
            );
          }) }
        </div>
      </div>
    );
  }
}

const root = document.getElementById('root');
render(<App />, root);
