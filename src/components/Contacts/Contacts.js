import React from "react";
import { useDispatch,  useSelector } from "react-redux";  
import {getFilter, getItems } from "redux/contacts/selector";
import {deleteContact} from "redux/contacts/operations";
import {ListItem, DeleteButton} from '../App.styled'



const Contacts = () => {
  const items = useSelector(getItems)
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    
    const getVisibleContacts = () => {
        if (!items) {
            return;
        }
        return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        
    };
    
    return (
        <>
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




  

