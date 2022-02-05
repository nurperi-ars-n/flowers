import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
	borderRadius: "20px",
};

export default function PaypelModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Button
				style={{ color: "black", fontWeight: "bold" }}
				onClick={handleOpen}
			>
				Paypal
			</Button>
			<Modal
				hideBackdrop
				open={open}
				onClose={handleClose}
				aria-labelledby='child-modal-title'
				aria-describedby='child-modal-description'
			>
				<Box sx={{ ...style }}>
					<Box>
						<Input placeholder='your email' />
						<Input placeholder='Confirm email address' />
						<Input placeholder='Your Password' />
						<Input placeholder='Confirm email address' />
					</Box>

					<Button
						color='error'
						variant='contained'
						onClick={handleClose}
						style={{ margin: "15px" }}
					>
						Отмена
					</Button>
					<Button
						color='primary'
						variant='contained'
						onClick={handleClose}
					>
						Send
					</Button>
				</Box>
			</Modal>
		</React.Fragment>
	);
}
