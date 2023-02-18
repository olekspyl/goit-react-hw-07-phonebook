import React from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { Title, TitleContacts, TitleFind, WrapToFind } from './App.styled'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getError, getIsLoading } from 'redux/contacts/selector';
import { fetchContacts } from 'redux/contacts/operations';


export default function App() {

  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      {/* {error && <p>{error}</p>} */}
      {<> 
        <Title>Phonebook</Title>
      <Form/>
      <TitleContacts>Contacts</TitleContacts>
      <WrapToFind>
        <TitleFind>Find contacts by name</TitleFind>
        <Filter/>
      </WrapToFind>
        <Contacts />
      </>}
    </div>
  );
};
