import React from "react";
import UserMenu from "components/UserMenu"
import AuthNav from "components/AuthNav";
import { Title, NavTitle } from "components/App.styled";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth-form/auth-selectors";

const Header = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)

    return (
        <>
            <Title><NavTitle to="/">Phonebook</NavTitle></Title>
           {isLoggedIn ? <UserMenu /> : <AuthNav/>} 
        </>
    )
}

export default Header;