/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { render } from 'react-dom';
import Pet from './components/pet';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Pets</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        <Pet name="Doink" animal="Cat" breed="Mixed" />
      </div>
    );
  }
}

const root = document.getElementById('root');
render(<App />, root);
