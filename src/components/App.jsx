import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import authSelectors from 'redux/auth-form/auth-selectors';
import { fetchCurrentUser } from 'redux/auth-form/auth-operations';
import { RestrictedRoute } from 'pages/RestrictedRoute';
import { PrivateRoute } from 'pages/PrivateRoute';

export default function App() {
  const dispatch = useDispatch();
  const refresh = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return  (!refresh && (
   <>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts" />} />
      <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
      <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
      <Route path="*" element={<HomePage />} />
      </Routes>
 </>
  ))
};
