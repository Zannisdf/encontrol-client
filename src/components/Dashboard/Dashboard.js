import React, { useState } from 'react';

import View from './View';

const Dashboard = ({ children, user, logout }) => {
  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <View
      user={user}
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      children={children}
      logout={logout}
    />
  );
};

export default Dashboard;
