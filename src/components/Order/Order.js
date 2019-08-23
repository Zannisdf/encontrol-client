import React, { useState, useEffect } from 'react';

import Cart from '../Cart';
import Grid from '@material-ui/core/Grid';
import SearchProducts from '../SearchProducts';
import SearchResults from '../SearchResults/SearchResults';

const Order = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);

  const handleInputChange = e => {
    const query = e.target.value;
    setSearchInput(query);
  };

  const handleSearch = e => {
    e.preventDefault();
    console.log('Searching item...');
    // API call
    const matchingProducts = [
      { id: '1', name: 'Copla bronce 3/4', price: 1900, stock: 20 },
      { id: '3', name: 'Copla PVC bronce 3/4', price: 250, stock: 0 }
    ];
    setSearchResults(matchingProducts);

    // Add to cart by default if a single product is found.
    if (matchingProducts.length === 1) {
      addToCart(matchingProducts[0]);
    }
  };

  const addToCart = product => {
    const index = products.findIndex(
      existingProd => existingProd.id === product.id
    );
    if (index < 0) {
      setProducts(prevProds => [
        ...prevProds,
        { ...product, quantity: 1, subTotal: product.price }
      ]);
    } else {
      setProducts(prevProds => [
        ...prevProds.slice(0, index),
        {
          ...prevProds[index],
          quantity: prevProds[index].quantity + 1,
          subTotal: prevProds[index].subTotal + product.price
        },
        ...prevProds.slice(index + 1)
      ]);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Cart products={products} />
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
