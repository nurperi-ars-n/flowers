import React from "react";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import { ROUTES } from "../utills/constants/general";
function AccessDenied(props) {
	console.log(props, "props");
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<h1>YOU DON'T HAVE ACCESS TO THIS PAGE :(</h1>
			<Link to={ROUTES.FLOWERS}>
				<Button> GO BACK ➡</Button>
			</Link>
			<Button color='primary' variant='contained' onClick={handleOpen}>
				CREATE ORDERS
			</Button>
			<Modal open={open} onClose={handleClose} title='Create orders'>
				<div>
					<Button variant='outlined'>Отмена</Button>
					<Button color='primary' variant='contained'>
						Создать
					</Button>
				</div>
			</Modal>
		</div>
	);
}

export default AccessDenied;
