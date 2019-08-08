import React, { useState } from 'react';

import View from './View';

const Dashboard = ({ render = <div>loremo</div> }) => {
  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <View
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      render={render}
    />
  );
};

export default Dashboard;
