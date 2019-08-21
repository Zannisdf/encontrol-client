import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';
import SearchProducts from '../SearchProducts';

afterEach(cleanup);

it('Should update barcode field on user input', () => {
  const { getByLabelText } = render(<SearchProducts />);
  const barcodeInput = getByLabelText(/barra/i);
  const inputText = 'Test';
  const empty = '';

  expect(barcodeInput.value).toBe(empty);

  fireEvent.change(barcodeInput, { target: { value: inputText } });

  expect(barcodeInput.value).toBe(inputText);
});

it('Should update name field on user input', () => {
  const { getByLabelText } = render(<SearchProducts />);
  const nameInput = getByLabelText(/nombre/i);
  const inputText = 'Test';
  const empty = '';

  expect(nameInput.value).toBe(empty);

  fireEvent.change(nameInput, { target: { value: inputText } });

  expect(nameInput.value).toBe(inputText);
});

it('Should update category field on user input', () => {
  const { getByLabelText } = render(<SearchProducts />);
  const categoryInput = getByLabelText(/categor.a/i);
  const inputText = 'Test';
  const empty = '';

  expect(categoryInput.value).toBe(empty);

  fireEvent.change(categoryInput, { target: { value: inputText } });

  expect(categoryInput.value).toBe(inputText);
});
