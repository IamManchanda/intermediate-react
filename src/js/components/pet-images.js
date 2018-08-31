/* Fix these A11y issue soon */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import React, { Component } from 'react';

export default class PetImages extends Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter((photo) => photo['@size'] === 'pn');
    }
    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({ active: Number(event.target.dataset.index) });
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={ photos[active].value } alt="Primary Animal" />
        <div className="carousel-smaller">
          { photos.map((photo, index) => (
            <img
              onClick={ this.handleIndexClick } 
              role="button"
              key={ photo.value } 
              src={ photo.value }
              data-index={ index }
              alt="Animal thumbnail" 
              className={ index === active ? 'active' : '' }
            />
          )) }
        </div>
      </div>
    );
  }
}
