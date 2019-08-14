import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
    margin: spacing(1)
  },
  submit: {
    margin: spacing(3, 0, 2)
  }
}));

const Form = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={e => handleSubmit(e)}>
      <TextField
        id="email"
        label="Correo electrónico"
        name="email"
        variant="outlined"
        margin="normal"
        autoFocus
        fullWidth
        required
      />
      <TextField
        id="password"
        label="Contraseña"
        name="password"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
        required
      />
      <FormControlLabel
        id="remember"
        label="Recordar"
        name="remember"
        control={<Checkbox value="recordar" color="primary" />}
      />
      <Button
        className={classes.submit}
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
      >
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default Form;
