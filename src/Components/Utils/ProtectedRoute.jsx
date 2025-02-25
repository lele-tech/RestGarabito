import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ children, redirectTo = "/" }) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to={redirectTo} replace />;
    }

    return children || <Outlet />;
}


ProtectedRoute.propTypes = {
    children: PropTypes.node,
    redirectTo: PropTypes.string
};