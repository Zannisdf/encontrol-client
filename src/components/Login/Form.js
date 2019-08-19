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
    <form
      data-testid="loginForm"
      className={classes.root}
      onSubmit={e => handleSubmit(e)}
    >
      <TextField
        data-testid="email"
        id="email"
        label="Correo electrónico"
        name="email"
        variant="outlined"
        margin="normal"
        type="email"
        autoFocus
        fullWidth
        required
      />
      <TextField
        data-testid="password"
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
        data-testid="loginBtn"
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
