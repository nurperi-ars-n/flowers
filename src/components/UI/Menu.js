import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { getLocal, removeLocal } from "../../helpers/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/logIn/loginSlice";

export default function BasicMenu() {
	const username = useSelector((state) => state.auth.username);
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function onLogout() {
		handleClose();
		dispatch(logOut());
	}

	let isAuth = getLocal("isAuth");

	let authItems = (
		<>
			<Link to='/login'>
				<MenuItem onClick={handleClose}>Log In</MenuItem>
			</Link>
			<MenuItem onClick={handleClose}>
				<Link to='/sign_up'>SignUp</Link>
			</MenuItem>
		</>
	);

	if (isAuth) authItems = <MenuItem onClick={onLogout}>Log Out</MenuItem>;

	return (
		<div>
			<Button
				id='basic-button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{ color: "black" }}
			>
				{isAuth ? username : "Log In"}
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{/* <MenuItem onClick={handleClose}>
					<Link to='/login'>Log In</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/sign_up'>SignUp</Link>
				</MenuItem> */}
				{authItems}
			</Menu>
		</div>
	);
}
