import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const AuthNav = () => {
    return (
        <>
            <Button as={NavLink}
                variant='ghost'
                colorScheme='purple'
                size='sm'
                fontSize="3xl"
                to="/login"> Log in </Button >
            <Button as={NavLink}
                variant='ghost'
                colorScheme='purple'
                size='sm'
                fontSize="3xl"
                to="/register"> Sign up </Button >
            </>
    )
}

export default AuthNav;