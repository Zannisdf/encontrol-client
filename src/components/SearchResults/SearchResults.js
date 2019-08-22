import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Product from './Product';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(3)
  }
}));

const SearchResults = ({ products = [] }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <List>
        {products.length !== 0 ? (
          products.map(({ id, name, stock, price }) => (
            <Product key={id} id={id} name={name} stock={stock} price={price} />
          ))
        ) : (
          <ListItem>
            <ListItemText
              primary="Sin resultados"
              primaryTypographyProps={{
                variant: 'body1',
                component: 'div',
                color: 'error',
                align: 'center'
              }}
            />
          </ListItem>
        )}
      </List>
    </Paper>
  );
};

export default SearchResults;
