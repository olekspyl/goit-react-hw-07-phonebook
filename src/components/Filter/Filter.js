import React from "react";
import {useDispatch, useSelector} from "react-redux"; 
import { selectFilter } from "redux/contacts/contactsSelectors";
import { changeFilter } from 'redux/contacts/filterSlice';
import { Input, Box, Heading, Divider } from "@chakra-ui/react";


const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  
  return ( <>
    <Box px='4' mb='3'>
      <Divider />
      <Box mt='5'>
      <Heading fontSize='medium'>Find contacts by name</Heading>
      </Box>
    
    <label>
      <Input
        maxwidt='3xl'
        type="text"
          name="filter"
          maxWidth='3xl'
        value={filter}
        onChange={
          e => dispatch(changeFilter(e.target.value))
          
        }
      />
      </label>
      </Box>
     </>
  )
};

export default Filter;

 