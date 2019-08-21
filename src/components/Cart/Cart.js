import React from 'react';

import baseConfig from '../../config/material-table';

import MaterialTable from 'material-table';

const columns = [
  { title: 'ID', field: 'id', editable: 'never' },
  { title: 'Nombre', field: 'name', editable: 'never' },
  { title: 'Precio', field: 'price', editable: 'never' },
  { title: 'Cantidad', field: 'quantity', editable: 'never' },
  { title: 'Sub-total', field: 'subTotal', editable: 'never' }
];

const data = [
  { id: '1', name: 'Copla', price: '9.990', quantity: '1', subTotal: '9.990' },
  { name: 'Total', subTotal: '9.990' }
];

const setData = data => console.log(data);

const Cart = () => (
  <MaterialTable
    title="Carro"
    isLoading={false}
    columns={columns}
    data={data}
    editable={{
      onRowDelete: toBeDeleted =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            {
              const currentData = [...data];
              const index = currentData.indexOf(toBeDeleted);
              currentData.splice(index, 1);

              setData(currentData);
            }

            resolve();
          }, 1000);
        })
    }}
    {...baseConfig}
    options={{
      ...baseConfig.options,
      search: false,
      padding: 'dense'
    }}
  />
);

export default Cart;
