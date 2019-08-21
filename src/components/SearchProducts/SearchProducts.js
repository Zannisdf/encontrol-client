import React, { useState } from 'react';

import View from './View';

const SearchProducts = () => {
  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleInputChange = (e, fn) => {
    e.persist();
    fn(e.target.value);
  };

  const handleBarcodeChange = e => handleInputChange(e, setBarcode);

  const handleNameChange = e => handleInputChange(e, setName);

  const handleCategoryChange = e => handleInputChange(e, setCategory);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Searching item...');
    // Submit to API
  };

  return (
    <View
      barcode={barcode}
      name={name}
      category={category}
      handleBarcodeChange={handleBarcodeChange}
      handleNameChange={handleNameChange}
      handleCategoryChange={handleCategoryChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchProducts;
