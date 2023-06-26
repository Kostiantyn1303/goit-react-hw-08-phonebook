import { AppContainer } from './App.styled';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import Layout from 'Layuot/Layout';

import { fetchCurrentUser } from 'redux/auth/authOperation';
import { PrivatRouteContacts, PrivatRouteHome } from 'redux/auth/privateRoute';

const RegistrView = lazy(() => import('./views/RegistrViews'));
const LoginViews = lazy(() => import('./views/LoginViews'));
const Contacts = lazy(() => import('./views/Contacts'));
const HomeViews = lazy(() => import('./views/HomeViews'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivatRouteHome>
                <HomeViews />
              </PrivatRouteHome>
            }
          />
          <Route path="registration" element={<RegistrView />} />
          <Route path="login" element={<LoginViews />} />
          <Route
            path="contacts"
            element={
              <PrivatRouteContacts>
                <Contacts />
              </PrivatRouteContacts>
            }
          ></Route>
        </Route>
      </Routes>
    </AppContainer>
  );
}
