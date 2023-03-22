import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import authSelectors from 'redux/authForm/authSelectors';
import { fetchCurrentUser } from 'redux/authForm/authOperations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from './Layout';


export default function App() {
  const dispatch = useDispatch();
  const refresh = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return  (!refresh && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts" />} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
  ))
};
