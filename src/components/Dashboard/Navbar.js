import React, { useState } from 'react';
import clsx from 'clsx';

import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing, transitions }) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    transition: transitions.create(['margin', 'width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`,
    marginLeft: ({ drawerWidth }) => drawerWidth,
    transition: transitions.create(['margin', 'width'], {
      easing: transitions.easing.easeOut,
      duration: transitions.duration.enteringScreen
    })
  },
  hide: {
    display: 'none'
  }
}));

const Navbar = ({
  drawerWidth,
  drawerOpen,
  handleDrawerOpen,
  logout,
  history
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles({ drawerWidth });
  const open = Boolean(anchorEl);

  const handleMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
    history.push('/login');
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, drawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Inicio
        </Typography>
        <div>
          <IconButton
            data-testid="menu-toggle"
            color="inherit"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem data-testid="logout" onClick={handleLogout}>
              Cerrar sesión
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
