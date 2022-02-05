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
	borderRadius: "20px",
	pb: 3,
};

export default function ChildModal() {
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
				Zelo
			</Button>
			<Modal
				hideBackdrop
				open={open}
				onClose={handleClose}
				aria-labelledby='child-modal-title'
				aria-describedby='child-modal-description'
			>
				<Box sx={{ ...style }}>
					<h2>
						My email:
						<span style={{ color: "blue", marginLeft: "5px" }}>
							admin@gmail.com
						</span>
					</h2>
					<Input placeholder='Paid your email' type='text' />
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
