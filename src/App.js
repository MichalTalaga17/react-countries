import React from 'react';
import Country from './country';
import countries from './countries';

const App = () => {
  return (
    <div className="container">
      {countries.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </div>
  );
}

export default App;