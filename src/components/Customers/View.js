import React from 'react';

import baseConfig from '../../config/material-table';

import MaterialTable from 'material-table';
import Delete from '@material-ui/icons/Delete';

const View = ({ table: { columns, data } }) => (
  <MaterialTable
    title="Clientes"
    columns={columns}
    data={data}
    actions={[
      {
        icon: () => <Delete />,
        tooltip: 'Eliminar cliente',
        onClick: () => console.log('clicked')
      }
    ]}
    {...baseConfig}
  />
);

export default View;
