import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import Header from './Header';


export default function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<HomePage />} />
      </Routes>
 </>
  );
};
