// KrajCard.js

import React from 'react';

const Country = ({ country }) => {
  return (
    <div className="card col-6 col-md-4 col-lg-3">
      <img src={country.flagLink} className="card-img-top" alt={`${country.name} Flag`} />
      <div className="card-body">
        <h5 className="card-title">{country.name}</h5>
        <p className="card-text">Populacja: {country.population}</p>
      </div>
    </div>
  );
}

export default Country;