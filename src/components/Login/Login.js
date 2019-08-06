import React from 'react';

import useAuth from '../../utils/auth-client';

import View from './View';

const Login = () => {
  const { login } = useAuth();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    login({
      email: email.value,
      password: password.value
    });
  };

  return <View handleSubmit={handleSubmit} />;
};

export default Login;
