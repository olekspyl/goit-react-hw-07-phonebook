import React from "react";
import UserMenu from "components/UserMenu"
import AuthNav from "components/AuthNav";
import { useSelector } from "react-redux";
import authSelectors from "redux/authForm/authSelectors";
import Navigation from "components/Navigation";
import { Flex, Spacer, Box } from "@chakra-ui/react";

const Header = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)

    return (
        <>
            <Box px="5" pt='5' mb='3'>
            <Flex as="header" justifyContent="flex-end" >
            <Navigation />
            <Spacer/>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Flex>
             </Box>
        </>
    )
}

export default Header;