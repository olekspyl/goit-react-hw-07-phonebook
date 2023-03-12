import { useDispatch, useSelector } from "react-redux";
import authSelectors from 'redux/auth-form/auth-selectors'
import { logout } from "redux/auth-form/auth-operations";

const UserMenu = () => {
    const userName = useSelector(authSelectors.selectUserName);
    const dispatch = useDispatch();

    return (
                <div>
            <p>Welcome, {userName }</p>
        <button type="button" onClick={() => dispatch(logout())}>Logout</button>
                </div>
        
    )
}

export default UserMenu;