import React, { useState } from 'react';

import View from './View';

const Login = ({ history, login, useUser }) => {
  const [error, setError] = useState(null);
  const { user } = useUser();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const [err] = login({
      email: email.value,
      password: password.value
    });

    // Redirect only if login is successful.
    err ? setError(err) : history.push('/');
  };

  return <View user={user} error={error} handleSubmit={handleSubmit} />;
};

export default Login;
