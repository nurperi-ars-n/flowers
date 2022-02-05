import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../utills/constants/general";

function PrivateRoute({ component: RouteComponent, roles }) {
	const { isAuth, role } = useSelector((state) => state.auth);
	const userHasRequiredRole = roles === role;
	if (isAuth && userHasRequiredRole) {
		return <RouteComponent />;
	}
	if (!isAuth && !userHasRequiredRole) {
		return <Navigate to={ROUTES.ACCESSDENIED} replace />;
	}
	return <Navigate to={ROUTES.FLOWERS} replace />;
}

export default PrivateRoute;
