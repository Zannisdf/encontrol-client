import React from 'react';

import Cart from '../Cart';
import Grid from '@material-ui/core/Grid';
import Products from '../Products';
import SearchProducts from '../SearchProducts';

const Order = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Cart />
      </Grid>
      <Grid item xs={4}>
        <SearchProducts />
        <Products />
      </Grid>
    </Grid>
  );
};

export default Order;
