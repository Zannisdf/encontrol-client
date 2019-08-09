import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import sadCat from '../../assets/images/sad-cat.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(3, 2),
    textAlign: 'center'
  },
  title: {
    marginBottom: '30px'
  },
  image: {
    maxWidth: '400px',
    height: 'auto'
  }
}));

const NoMatch = () => {
  const { root, title, image } = useStyles();
  return (
    <Paper className={root}>
      <Typography className={title} component="h3" variant="h5">
        ¡No hay nada aquí!
      </Typography>
      <img src={sadCat} className={image} alt="Gato triste" />
    </Paper>
  );
};

export default NoMatch;
