import { ROUTES } from "../utills/constants/general";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Users from "../Pages/Users";
import Flowers from "../Pages/Flowers";
import Orders from "../Pages/Orders";

export default function DashboardRoute() {
	return (
		<Routes>
			<Route path={ROUTES.ADMIN_FLOWERS} element={<Flowers />} />
			<Route path={ROUTES.ADMIN_USERS} element={<Users />} />
			<Route path={ROUTES.ADMIN_ORDERS} element={<Orders />} />
		</Routes>
	);
}
