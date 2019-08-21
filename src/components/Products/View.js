import React from 'react';

import baseConfig from '../../config/material-table';

import MaterialTable from 'material-table';

const View = ({ isLoading, columns, data, setData }) => (
  <MaterialTable
    title="Productos"
    isLoading={isLoading}
    columns={columns}
    data={data}
    editable={{
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            {
              const currentData = [...data];
              const index = currentData.indexOf(oldData);
              currentData[index] = newData;

              setData(currentData);
            }

            resolve();
          }, 1000);
        })
    }}
    {...baseConfig}
    options={{
      ...baseConfig.options,
      search: false
    }}
  />
);

export default View;
