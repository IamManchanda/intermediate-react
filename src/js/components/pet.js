import React from 'react';
import { Link } from '@reach/router';

export default ({ name, animal, breed, media, location, id }) => {
  let photos = [];
  if (media && media.photos && media.photos.photo) {
    photos = media.photos.photo.filter((photo) => photo['@size'] === 'pn');
  }
  const hero = photos[0] ? photos[0].value : 'http://via.placeholder.com/300x300';

  return (
    <Link to={ `/details/${id}` } className="pet">
      <div className="image-container">
        <img src={ hero } alt={ name } />
      </div>
      <div className="info">
        <h1>{ name }</h1>
        <h2>{ `${animal} -- ${breed} -- ${location}` }</h2>
      </div>
    </Link>
  );
};
