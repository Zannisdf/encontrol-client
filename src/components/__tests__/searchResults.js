import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchResults from '../SearchResults';

afterEach(cleanup);

it('Should render error message if nothing is passed in', () => {
  const products = [];
  const { getByText } = render(<SearchResults products={products} />);

  expect(getByText(/sin resultados/i)).toBeInTheDocument();
});

it('Should render as many products as it receives', () => {
  const products = [{ id: '2', name: 'Lorem', stock: 3, price: '10' }];
  const { getAllByTestId } = render(<SearchResults products={products} />);

  expect(getAllByTestId('search-results-product')).toHaveLength(
    products.length
  );
});
