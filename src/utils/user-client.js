const getUser = () => {
  const credentials = localStorage.getItem('USER_CREDENTIALS');
  return credentials ? JSON.parse(credentials) : null;
};

const useUser = () => ({
  user: getUser()
});

export default useUser;
