import React from 'react';

import View from './View';

const table = {
  columns: [
    { title: 'ID', field: 'id' },
    { title: 'Nombre', field: 'name' },
    { title: 'Plan', field: 'subscription' }
  ],
  data: [
    { id: 1, name: 'Lorem', subscription: 'Diamante' },
    { id: 2, name: 'Ipsum', subscription: 'Oro' }
  ]
};

const Customers = () => <View table={table} />;

export default Customers;
