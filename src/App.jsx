import { AppContainer } from './App.styled';
import { RestrictedRoute } from 'redux/auth/RestrictedRoude';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import Layout from 'Layuot/Layout';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import { fetchCurrentUser } from 'redux/auth/authOperation';
import { PrivatRouteContacts } from 'redux/auth/privateRoute';

const RegistrView = lazy(() => import('./views/RegistrViews'));
const LoginViews = lazy(() => import('./views/LoginViews'));
const Contacts = lazy(() => import('./views/Contacts'));
const HomeViews = lazy(() => import('./views/HomeViews'));

export function App() {
  const refresh = useSelector(authSelectors.getRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !refresh && (
      <AppContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeViews />} />
            <Route path="registration" element={<RegistrView />} />
            <Route
              path="login"
              element={
                <RestrictedRoute element={LoginViews} redirectTo="/contacts" />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivatRouteContacts element={Contacts} redirectTo="/login" />
              }
            ></Route>
          </Route>
        </Routes>
      </AppContainer>
    )
  );
}
