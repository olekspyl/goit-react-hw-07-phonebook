import React from "react";
import {useDispatch, useSelector } from "react-redux"; 
import { nanoid } from 'nanoid'
import { addContact } from "redux/contacts/contactsOperations";
import { selectItems } from "redux/contacts/contactsSelectors";
import { Input, Button, Box, Text } from "@chakra-ui/react";


export default function Form() {
  const id = nanoid();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      id: id,
      name: form.elements.name.value.trim(),
      number: form.elements.number.value.trim(),
    };

    form.reset();
    
    if (items.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()))
    { alert(`Contact ${data.name} ia already in phonebook`) }
    else {
      return dispatch(addContact(data));
    };
  };


  return (
    <Box as="form" display='block' px="4" mb='3' onSubmit={handleSubmit}>
    <label htmlFor="name">
     <Text> Name </Text> 
      <Input as="input"
        id={id}
        type="text"
           name="name"
           maxWidth='3xl'
        required
      />
    </label>
    <label htmlFor="number">
      <Text> Phone number </Text>
      <Input as="input"
        id={id}
        type="tel"
           name="number"
           maxWidth='3xl'
        required
      />
    </label>
       <Button
         variant='outline'
        colorScheme='purple'
          size='sm'
        fontSize="sm"
        display='block'
         mt='2'
          type="submit">Add contact</Button>  
        </Box>
    ) 
};