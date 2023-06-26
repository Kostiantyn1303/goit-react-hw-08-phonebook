const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getRefresh = state => state.isRefreshing;
const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getRefresh,
};
export default authSelectors;
