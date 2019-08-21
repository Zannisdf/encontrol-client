import React, { useEffect, useState } from 'react';

import View from './View';

const columns = [
  { title: 'ID', field: 'id', editable: 'never' },
  { title: 'Nombre', field: 'name', editable: 'never' },
  { title: 'Descripción', field: 'description', editable: 'never' },
  { title: 'Precio', field: 'price', editable: 'never' },
  { title: 'Stock', field: 'stock', editable: 'never' },
  { title: 'Cantidad', field: 'quantity' }
];

const Customers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // data fetching
    const timer = setTimeout(() => {
      setData([
        {
          id: 1,
          name: 'Lorem',
          description: 'Copla chica',
          price: '$9.990',
          stock: '3',
          quantity: '0'
        },
        {
          id: 2,
          name: 'Ipsum',
          description: 'Copla grande',
          price: '$9.990',
          stock: '5',
          quantity: '0'
        }
      ]);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      columns={columns}
      isLoading={isLoading}
      data={data}
      setData={setData}
    />
  );
};

export default Customers;
