const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getRefresh = state => state.isRefreshing;
const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getRefresh,
};
export default authSelectors;
