import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Form from './Form';
import Typography from '@material-ui/core/Typography';
import Alert from './Alert';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginTop: spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const View = ({ user, handleSubmit, error }) => {
  const classes = useStyles();

  return (
    <>
      {user ? (
        <Redirect to="/" />
      ) : (
        <Container className={classes.container} component="main" maxWidth="xs">
          <Typography variant="h5" component="h1">
            Iniciar Sesión
          </Typography>
          <Form handleSubmit={handleSubmit} />
          <Alert error={error} />
        </Container>
      )}
    </>
  );
};
export default View;
