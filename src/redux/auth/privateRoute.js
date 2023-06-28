import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../auth/authSelectors';

export const PrivatRouteContacts = ({
  element: Element,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getRefresh);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Element />;
};
