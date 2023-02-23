import React from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { Title, TitleContacts, TitleFind, WrapToFind } from './App.styled'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectError, selectIsLoading } from 'redux/contacts/selector';
import { fetchContacts } from 'redux/contacts/operations';


export default function App() {

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
        <Title>Phonebook</Title>
      <Form/>
      <TitleContacts>Contacts</TitleContacts>
      <WrapToFind>
        <TitleFind>Find contacts by name</TitleFind>
        <Filter/>
      </WrapToFind>
        <Contacts />
    </div>
  );
};
