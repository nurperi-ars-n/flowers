import React, { useState, useEffect } from "react";
import {Box, Button, Typography} from "@mui/material";
import FlowerTable from "../components/UI/Table";
import { useSelector } from "react-redux";
import {delFlowers, delUsers, getUsers} from "../api/api";
import Modal from "@mui/material/Modal";
import {toast} from "react-toastify";

function Users() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	const fetchUsers = async () => {
		setIsLoading(true);
		const { success, data } = await getUsers();
		if (success) {
			setUsers(data);
		}
		setIsLoading(false);
	};
	useEffect(() => {
	}, [users]);

	useEffect(() => {
		fetchUsers().then(null);
	}, []);

	const handleDeleteClick = (row) => {
	};

	const handleModal = (user) => {
		setIsOpen(!isOpen)
		if(user) {
			setCurrentUser(user)
		}
	}
	const onSubmit = async () => {
		const result = await delUsers(currentUser.id);
		if (result && result.success) {
			fetchUsers();
			handleModal();
			toast.success("User deleted successfully!");
		} else {
			toast.error("Что-то пошло не так при загрузке данных...");
		}
	}

	const flowerOptions = [
		{
			Header: "ID",
			accessor: "id",
		},
		{
			Header: "FullName",
			accessor: "fullName",
		},

		{
			Header: "PhoneNumber",
			accessor: "phoneNumber",
		},
		{
			Header: "Role",
			filter: "role",
			accessor: "role",
		},
		{
			Header: "Email",
			filter: "email",
			accessor: "email",
		},
		{
			Header: "Delete",
			filter: "delete",
			Cell: (cell) => (
				<Button
					variant={"contained"}
					color={"error"}
					onClick={() => handleModal(cell.row.original)}
				>
					Delete
				</Button>
			),
		},
	];
	return (
		<>
			<FlowerTable columns={flowerOptions} data={users} />
			<Modal open={isOpen} onClose={handleModal}>
				<Box
					sx={{
						position: "absolute",
						top: "20%",
						left: "30%",
						right: "30%",
						transform: "translate(-50% -50%)",
						background: "white",
						border: "2px solid black",
						borderRadius: "20px",
						p: 4,
					}}
				>
					<Box closeButton>
						<Typography variant='h4' mb={4}>
							Are you sure you want to delete the user "{currentUser?.email}"?
						</Typography>
					</Box>


					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							marginTop: "1.5rem",
						}}
					>
						<Box
							sx={{
								display: "flex",
								width: "14rem",
								justifyContent: "space-between",
							}}
						>
							<Button
								variant='contained'
								color="info"

								onClick={handleModal}
							>
								Отмена{" "}
							</Button>


							<Button
								variant='contained'
								color='error'
								onClick={onSubmit}
							>
								Удалить
							</Button>
						</Box>
					</Box>
				</Box>
			</Modal>
		</>
	);
}

export default Users;
