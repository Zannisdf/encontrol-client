const login = ({ email, password }) => {
  const mockEmail = 'test@goplaceit.com';
  const mockPassword = '123456';

  return email === mockEmail && password === mockPassword;
};

const useAuth = () => ({
  login
});

export default useAuth;
