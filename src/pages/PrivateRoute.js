import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth-form/auth-selectors";
import { useSelector } from "react-redux";

export const PrivateRoute = ({component: Component, redirectTo="/"}) => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect  ? <Navigate to={redirectTo } /> : <Component/>
}