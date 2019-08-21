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
