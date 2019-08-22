import React from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  listTitle: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const Product = ({ id, name, price, stock }) => {
  const classes = useStyles();
  const available = stock !== 0;

  const handleClick = () => {
    console.log(id);
  };

  return (
    <ListItem button onClick={handleClick} disabled={!available}>
      <ListItemText
        primary={
          <div className={classes.listTitle}>
            <span>{name}</span>
            <span>{price}</span>
          </div>
        }
        secondary={available ? `Stock: ${stock}` : 'Sin Stock'}
        secondaryTypographyProps={{
          component: 'span',
          variant: 'body2',
          color: available ? 'inherit' : 'error'
        }}
      />
    </ListItem>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired
};

export default Product;
