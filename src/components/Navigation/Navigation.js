import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import authSelectors from "redux/authForm/authSelectors";
import {Button} from '@chakra-ui/react';

const Navigation = () => {
 
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)
  
  return (
    <>
      {!isLoggedIn && 
        (<Button as={NavLink}
                variant='ghost'
                colorScheme='purple'
                size='sm'
                fontSize="3xl"
                to="/"> Home </Button >)
      }
      {isLoggedIn && (<Button as={NavLink}
                variant='ghost'
                colorScheme='purple'
                size='sm'
                fontSize="3xl"
                to="/contacts"> Contacts </Button >)
        }
    </>
  );
};

export default Navigation;