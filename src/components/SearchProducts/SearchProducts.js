import React, { useState } from 'react';

import View from './View';

const SearchProducts = () => {
  const [productId, setProductId] = useState('');

  const handleInputChange = e => {
    e.persist();
    setProductId(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Searching item...');
    // Submit to API
  };

  return (
    <View
      productId={productId}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchProducts;
