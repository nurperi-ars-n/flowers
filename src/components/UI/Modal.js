import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ChildModal from "./NestedModal";
import OtherModal from "./OtherModal";
import PaypelModal from "./PaypelModal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	borderRadius: "20px",

};

export default function PAYModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button
				onClick={handleOpen}
				variant='contained'
				style={{ marginTop: "15px" }}
			>
				Proceed to checkout
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
					>
						Your total amount:
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						Choose your payment method :
					</Typography>
					<span
						style={{
							display: "flex",
							justifyContent: "space-around",
							width: "300px",
						}}
					>
						<ChildModal />
						<PaypelModal />
						<OtherModal />
					</span>
				</Box>
			</Modal>
		</div>
	);
}
