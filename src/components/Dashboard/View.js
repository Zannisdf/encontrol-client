import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Container from './Container';
import Drawer from './Drawer';
import Navbar from './Navbar';

const drawerWidth = 240;

const useStyles = makeStyles(({ spacing, transitions, mixins }) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: spacing(3),
    transition: transitions.create('margin', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: transitions.create('margin', {
      easing: transitions.easing.easeOut,
      duration: transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

const View = ({
  user,
  open,
  handleDrawerOpen,
  handleDrawerClose,
  logout,
  children
}) => {
  const classes = useStyles();

  return (
    <>
      {!user ? (
        <Redirect to="/login" />
      ) : (
        <div className={classes.root}>
          <Navbar
            drawerWidth={drawerWidth}
            drawerOpen={open}
            handleDrawerOpen={handleDrawerOpen}
            logout={logout}
          />
          <Drawer
            drawerWidth={drawerWidth}
            open={open}
            handleDrawerClose={handleDrawerClose}
            drawerHeader={classes.drawerHeader}
          />
          <Container
            open={open}
            styles={{
              content: classes.content,
              contentShift: classes.contentShift,
              drawerHeader: classes.drawerHeader
            }}
            children={children}
          />
        </div>
      )}
    </>
  );
};

export default View;
