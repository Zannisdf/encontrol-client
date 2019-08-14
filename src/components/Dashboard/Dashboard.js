import React, { useState } from 'react';

import useAuth from '../../utils/auth-client';

import View from './View';
import useUser from '../../utils/user-client';

const Dashboard = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const { user } = useUser();

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
