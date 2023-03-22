import React from "react";
import { useSelector, useDispatch } from "react-redux";  
import { selectFilter, selectItems } from "redux/contacts/contactsSelectors";
import { deleteContact } from "redux/contacts/contactsOperations";
import { Button, Text, Box, Flex, List } from "@chakra-ui/react";



const Contacts = () => {
    const items = useSelector(selectItems);
    const filter = useSelector(selectFilter);
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
            <List px='4'>
            {getVisibleContacts().map(({id, name, number}) => {
                return (

                    <li key={id}>
                        <Flex alignItems='center' mb='3'>
                            <Box mr='3'>
                                <Text fontWeight='semibold'>{name}</Text>
                                </Box>
                        <Text>{number}</Text>
                        <Button 
                            variant='outline'
                            colorScheme='purple'
                            size='sm'
                            fontSize="sm"
                            ml='2'
                                onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                            </Flex>
                        </li>
                    
                )
            })}
            </List>
        </>
    );
};

export default Contacts;




  

