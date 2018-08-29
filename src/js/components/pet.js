/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Pet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, animal, breed, media, location } = this.props;
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter((photo) => photo['@size'] === 'pn');
    }
    return (
      <div className="pet">
        <div className="image-container">
          <img src={ photos[0].value } alt={ name } />
        </div>
        <div className="info">
          <h1>{ name }</h1>
          <h2>{ `${animal} -- ${breed} -- ${location}` }</h2>
        </div>
      </div>
    );
  }
}

export default Pet;
