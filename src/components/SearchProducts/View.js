import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(2, 2)
  },
  grid: {
    alignItems: 'center'
  },
  input: {
    display: 'flex'
  },
  button: {
    width: '100%'
  },
  buttonText: {
    marginLeft: spacing(1)
  }
}));

const View = ({
  barcode,
  name,
  category,
  handleBarcodeChange,
  handleNameChange,
  handleCategoryChange,
  handleSubmit
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h6">Buscar productos</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={3}>
            <TextField
              id="outlined-password-input"
              label="Código de barra"
              className={classes.input}
              type="text"
              margin="normal"
              value={barcode}
              onChange={handleBarcodeChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-password-input"
              label="Nombre"
              className={classes.input}
              type="text"
              margin="normal"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-password-input"
              label="Categoría"
              className={classes.input}
              type="text"
              margin="normal"
              value={category}
              onChange={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              <SearchIcon />
              <span className={classes.buttonText}>Buscar</span>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default View;
