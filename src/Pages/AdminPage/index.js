import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classes from "../../assets/styles/AdminPage.module.css";
import DashboardRoute from "../../Routes/DashboardRoute";
import { logOut } from "../../store/logIn/loginSlice";
import { ROLES, ROUTES } from "../../utills/constants/general";

function AdminPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	function logoutHandler() {
		dispatch(logOut());
		navigate("/flowers");
	}

	return (
		<div className={classes.wrapper}>
			<aside className={classes.sidebar}>
				<Button
					className={classes.logOutButton}
					variant={"outlined"}
					onClick={logoutHandler}
				>
					Log out
				</Button>
				<div className={classes.profile}>
					<h3>Almaz</h3>
					<p>Admin</p>
				</div>
				<ul className={classes.panel}>
					<li>
						<Link to={ROUTES.ADMIN_FLOWERS}>
							<span className={classes["admin-item"]}>Flowers</span>
						</Link>
					</li>
					<li>
						<Link to={ROUTES.ADMIN_USERS}>
							<span className={classes["admin-item"]}>Users</span>
						</Link>
					</li>
					<li>
						<Link to={ROUTES.ADMIN_ORDERS}>
							<span className={classes["admin-item"]}>Orders</span>
						</Link>
					</li>
				</ul>
			</aside>
			<DashboardRoute roles={ROLES.ADMIN} />
		</div>
	);
}
export default AdminPage;
