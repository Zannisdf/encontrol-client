import React from 'react';

import baseConfig from '../../config/material-table';

import MaterialTable from 'material-table';

const View = ({ table: { isLoading, columns, data }, setTable }) => (
  <MaterialTable
    title="Clientes"
    isLoading={isLoading}
    columns={columns}
    data={data}
    editable={{
      onRowAdd: newData =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            {
              const currentData = data;
              currentData.push(newData);

              setTable({ isLoading, columns, data: currentData });
            }

            resolve();
          }, 1000);
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            {
              const currentData = data;
              const index = currentData.indexOf(oldData);
              console.log(currentData);
              currentData[index] = newData;

              setTable({ isLoading, columns, data: currentData });
            }

            resolve();
          }, 1000);
        }),
      onRowDelete: oldData =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            {
              let currentData = data;
              const index = currentData.indexOf(oldData);
              currentData.splice(index, 1);
              setTable({ isLoading, columns, data: currentData });
            }
            resolve();
          }, 1000);
        })
    }}
    {...baseConfig}
  />
);

export default View;
