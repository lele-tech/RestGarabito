import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute({ children, redirectTo = "/" }) {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to={redirectTo} replace />;
    }

    return children || <Outlet />;
}


PublicRoute.propTypes = {
    children: PropTypes.node,
    redirectTo: PropTypes.string,
};
