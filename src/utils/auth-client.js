const login = ({ email, password }) => {
  // API calls should be placed here.
  const mockEmail = 'test@goplaceit.com';
  const mockPassword = '123456';
  let error = null;

  // Create an error if the user isn't authenticated,
  // else, handle store the session.
  if (email !== mockEmail || password !== mockPassword) {
    error = new Error('Usuario o contraseña inválidos');
  } else {
    localStorage.setItem(
      'USER_CREDENTIALS',
      JSON.stringify({ email, password })
    );
  }

  return [error, { email, password }];
};

const logout = () => {
  localStorage.removeItem('USER_CREDENTIALS');
};

const useAuth = () => ({
  login,
  logout
});

export default useAuth;
