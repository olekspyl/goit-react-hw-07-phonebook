import { NavLink } from "react-router-dom";

const AuthNav = () => {
    return (
        <>
        <NavLink to="/login"> Log in </NavLink>
        <NavLink to="/register"> Sign up </NavLink>
            </>
    )
}

export default AuthNav;