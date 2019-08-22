import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Product from '../SearchResults/Product';

afterEach(cleanup);

it('Should render error message when product stock is 0', () => {
  const { getByText } = render(
    <Product id="1" name="Lorem" price="0" stock={0} />
  );

  expect(getByText(/sin stock/i)).toBeDefined();
});

it('Should not be clickable when product stock is 0', () => {
  const { getByTestId } = render(
    <Product id="1" name="Lorem" price="0" stock={0} />
  );

  expect(getByTestId('search-results-product')).toHaveAttribute(
    'aria-disabled',
    'true'
  );
});

it('Should render a message with product quantity', () => {
  const stock = 1;
  const message = new RegExp(`stock: ${stock}`, 'i');
  const { getByText } = render(
    <Product id="1" name="Lorem" price="0" stock={stock} />
  );

  expect(getByText(message)).toBeInTheDocument();
});

it('Should be clickable when product has stock', () => {
  const { getByTestId } = render(
    <Product id="1" name="Lorem" price="0" stock={1} />
  );

  expect(getByTestId('search-results-product')).toHaveAttribute(
    'aria-disabled',
    'false'
  );
});
