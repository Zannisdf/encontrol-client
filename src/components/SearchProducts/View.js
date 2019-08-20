import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(2, 2)
  },
  input: {
    display: 'flex'
  },
  button: {
    marginTop: spacing(2),
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
  handleCategoryChange
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5">Buscar productos</Typography>
      <form>
        <TextField
          id="outlined-password-input"
          label="Código de barra"
          className={classes.input}
          type="text"
          margin="normal"
          variant="outlined"
          value={barcode}
          onChange={handleBarcodeChange}
          autoFocus
        />
        <TextField
          id="outlined-password-input"
          label="Nombre"
          className={classes.input}
          type="text"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          id="outlined-password-input"
          label="Categoría"
          className={classes.input}
          type="text"
          margin="normal"
          variant="outlined"
          value={category}
          onChange={handleCategoryChange}
        />
        <Button variant="contained" color="primary" className={classes.button}>
          <SearchIcon />
          <span className={classes.buttonText}>Buscar</span>
        </Button>
      </form>
    </Paper>
  );
};

export default View;
