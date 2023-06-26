import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../auth/authSelectors';

export const PrivatRouteContacts = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const PrivatRouteHome = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }
  return children;
};
