import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from './authSelectors';
export const RestrictedRoute = ({
  element: Element,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Element />;
};
