import React, { useState } from 'react';

import useAuth from '../../utils/auth-client';
import useUser from '../../utils/user-client';

import View from './View';

const Login = ({ history }) => {
  const [error, setError] = useState(null);
  const { user } = useUser();
  const { login } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const [err] = login({
      email: email.value,
      password: password.value
    });

    err ? setError(err) : history.push('/');
  };

  return <View user={user} error={error} handleSubmit={handleSubmit} />;
};

export default Login;
