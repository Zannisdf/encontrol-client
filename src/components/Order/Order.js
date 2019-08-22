import React from 'react';

import Cart from '../Cart';
import Grid from '@material-ui/core/Grid';
import Products from '../Products';
import SearchProducts from '../SearchProducts';
import SearchResults from '../SearchResults/SearchResults';

const Order = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Cart />
      </Grid>
      <Grid item xs={4}>
        <SearchProducts />
        <SearchResults
          products={[
            { id: '1', name: 'Copla bronce 3/4', price: '$900', stock: 20 },
            { id: '3', name: 'Copla PVC bronce 3/4', price: '250', stock: 0 }
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Order;
