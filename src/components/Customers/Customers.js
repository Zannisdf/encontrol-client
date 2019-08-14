import React, { useEffect, useState } from 'react';

import View from './View';

const Customers = () => {
  const [table, setTable] = useState({ isLoading: true });

  useEffect(() => {
    setTable(prevTable => ({ ...prevTable, isLoading: true }));
    // data fetching
    const timer = setTimeout(() => {
      setTable({
        columns: [
          { title: 'ID', field: 'id', editable: 'never' },
          { title: 'Nombre', field: 'name' },
          { title: 'Plan', field: 'subscription' }
        ],
        data: [
          { id: 1, name: 'Lorem', subscription: 'Diamante' },
          { id: 2, name: 'Ipsum', subscription: 'Oro' }
        ],
        isLoading: false
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <View table={table} setTable={setTable} />;
};

export default Customers;
