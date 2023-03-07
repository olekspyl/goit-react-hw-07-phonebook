import React from "react";
import { useDispatch, useSelector } from "react-redux";  
import { useEffect } from 'react';
import { selectFilter, selectItems } from "redux/contacts/selector";
import {deleteContact} from "redux/contacts/operations";
import { ListItem, DeleteButton, TitleContacts } from '../App.styled'
import { fetchContacts } from "redux/contacts/operations";



const Contacts = () => {
    const items = useSelector(selectItems);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
  
     useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
    const getVisibleContacts = () => {
        if (!items) {
            return;
        }
        return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        
    };
    
    return (
        <>
            <TitleContacts>Contacts</TitleContacts>
            {items.length === 0 && <p>Sorry, but you don't have any contacts</p>}
           <ul>
            {getVisibleContacts().map(({id, name, number}) => {
                return (
                    <ListItem key={id}>{name} {number}
                        <DeleteButton onClick={() =>  dispatch(deleteContact(id))}>Delete</DeleteButton>
                    </ListItem>
                )
            })}
            </ul>
        </>
    );
};

export default Contacts;




  

