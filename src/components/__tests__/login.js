import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import useUser from '../../utils/user-client';

import Login from '../Login';

afterEach(cleanup);

it('Should show an alert on user credentials rejection', async () => {
  const err = new Error();
  const loginMock = jest.fn(() => [err, {}]);
  const { getByTestId } = render(<Login useUser={useUser} login={loginMock} />);

  getByTestId('email').value = 'lorem';
  getByTestId('password').value = '123456';
  fireEvent.submit(getByTestId('loginForm'));

  expect(loginMock).toHaveBeenCalledTimes(1);
  expect(getByTestId('loginReject')).toBeInTheDocument();
});
