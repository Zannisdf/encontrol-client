import React, { useState } from 'react';

import Cart from '../Cart';
import Grid from '@material-ui/core/Grid';
import SearchProducts from '../SearchProducts';
import SearchResults from '../SearchResults/SearchResults';

const Order = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = e => {
    const query = e.target.value;
    setSearchInput(query);
  };

  const handleSearch = e => {
    e.preventDefault();
    console.log('Searching item...');
    // API call
    setSearchResults([
      { id: '1', name: 'Copla bronce 3/4', price: '$900', stock: 20 },
      { id: '3', name: 'Copla PVC bronce 3/4', price: '250', stock: 0 }
    ]);
  };

  const addToCart = product => {
    console.log(product);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Cart />
      </Grid>
      <Grid item xs={4}>
        <SearchProducts
          searchInput={searchInput}
          handleChange={handleInputChange}
          handleSubmit={handleSearch}
        />
        <SearchResults addToCart={addToCart} products={searchResults} />
      </Grid>
    </Grid>
  );
};

export default Order;
