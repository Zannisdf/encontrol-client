import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

afterEach(cleanup);

const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => ({ ...render(<Router history={history}>{ui}</Router>) });

const credentials = { email: 'test@gpi.com', password: '123456' };

const authMock = () => ({
  login: () => [null, credentials],
  logout: () => undefined
});

it('Should redirect when accessing to /login if user is logged', async () => {
  const useUserMock = jest.fn().mockReturnValue({ user: credentials });
  const useAuthMock = jest.fn(authMock);

  const { getByTestId } = renderWithRouter(
    <App useUser={useUserMock} useAuth={useAuthMock} />,
    { route: '/login' }
  );

  expect(useUserMock).toHaveBeenCalledTimes(2);
  expect(useAuthMock).toHaveBeenCalledTimes(1);
  expect(getByTestId('auth-app')).toBeInTheDocument();
});

it('Should not show protected routes if user is not logged', async () => {
  const useUserMock = jest.fn().mockReturnValue({ user: null });
  const useAuthMock = jest.fn(authMock);

  const { getByTestId } = renderWithRouter(
    <App useUser={useUserMock} useAuth={useAuthMock} />
  );

  expect(useUserMock).toHaveBeenCalledTimes(2);
  expect(useAuthMock).toHaveBeenCalledTimes(1);
  expect(getByTestId('unauth-app')).toBeInTheDocument();
});

it('Should should show protected routes after login', async () => {
  const useUserMock = jest
    .fn()
    .mockReturnValueOnce({ user: null })
    .mockReturnValueOnce({ user: credentials });
  const useAuthMock = jest.fn(authMock);

  const { getByTestId } = renderWithRouter(
    <App useUser={useUserMock} useAuth={useAuthMock} />,
    { route: '/login' }
  );

  getByTestId('email').value = 'lorem';
  getByTestId('password').value = '123456';
  fireEvent.submit(getByTestId('loginForm'));

  expect(useUserMock).toHaveBeenCalledTimes(2);
  expect(useAuthMock).toHaveBeenCalledTimes(1);
  expect(getByTestId('auth-app')).toBeInTheDocument();
});

it('Should redirect to unprotected entry point after logout', async () => {
  const useUserMock = jest
    .fn()
    .mockReturnValueOnce({ user: credentials })
    .mockReturnValueOnce({ user: null });
  const useAuthMock = jest.fn(authMock);

  const { getByTestId } = renderWithRouter(
    <App useUser={useUserMock} useAuth={useAuthMock} />
  );

  fireEvent.click(getByTestId('menu-toggle'));
  fireEvent.click(getByTestId('logout'));

  expect(useUserMock).toHaveBeenCalledTimes(2);
  expect(useAuthMock).toHaveBeenCalledTimes(1);
  expect(getByTestId('unauth-app')).toBeInTheDocument();
});
