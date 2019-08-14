const getUser = () => {
  const credentials = localStorage.getItem('USER_CREDENTIALS');
  return credentials ? JSON.parse(credentials) : null;
};

// useUser hook only checks the user on component mount,
// therefore it should only be used to separate protected
// from unprotected routes.
const useUser = () => ({
  user: getUser()
});

export default useUser;
