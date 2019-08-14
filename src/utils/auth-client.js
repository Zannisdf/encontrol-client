const login = ({ email, password }) => {
  const mockEmail = 'test@goplaceit.com';
  const mockPassword = '123456';
  let error = null;

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
