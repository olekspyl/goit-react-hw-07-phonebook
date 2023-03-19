import { useDispatch, useSelector } from "react-redux";
import authSelectors from 'redux/authForm/authSelectors'
import { logout } from "redux/authForm/authOperations";
import { Heading, Button, Flex, Container } from "@chakra-ui/react";

const UserMenu = () => {
    const userName = useSelector(authSelectors.selectUserName);
    const dispatch = useDispatch();

    return (
        <Flex alignItems='center'>
            <Container mr="2" p="0">
                    <Heading fontSize="md" textAlign='center'>Welcome, {userName} </Heading>
            </Container>
                
            <Button as='button'
                variant='solid'
                colorScheme='purple'
                size='md'
                fontSize="xl"
                type="button"
                onClick={() => dispatch(logout())}>Logout</Button>
            </Flex >
        
    )
}

export default UserMenu;