import React from 'react';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginTop: spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    margin: spacing(1)
  },
  submit: {
    margin: spacing(3, 0, 2)
  }
}));

const View = ({
  credentials: { email, password },
  setCredentials,
  handleSubmit
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <Typography variant="h5" component="h1">
        Iniciar Sesión
      </Typography>
      <form className={classes.form} onSubmit={e => handleSubmit(e)}>
        <TextField
          id="email"
          label="Correo electrónico"
          name="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={e => setCredentials('email', e)}
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
          value={password}
          onChange={e => setCredentials('password', e)}
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
    </Container>
  );
};
export default View;
