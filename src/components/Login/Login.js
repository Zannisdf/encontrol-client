import React, { useState } from 'react';

import View from './View';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleCredentials = (id, e) => {
    e.persist();

    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [id]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <View
      credentials={credentials}
      setCredentials={handleCredentials}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
