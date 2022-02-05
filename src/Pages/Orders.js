import React, { useState, useEffect } from "react";
import FlowerTable from "../components/UI/Table";
import { getFlowers, getOrders } from "../api/api";
import { Button } from "@mui/material";
import { FLOWER_MODAL_TYPE } from "../utills/constants/general";
import OrdersCreateUpdateDeleteModal from "../components/UI/OrdersModal";

function Orders() {
	const [users, setUsers] = useState([]);
	const [flowers, setFlowers] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [modal, setModal] = useState({
		isOpen: false,
		item: null,
		modalType: FLOWER_MODAL_TYPE.CREATE,
		title: "",
	});

	useEffect(() => {
	}, [users]);

	useEffect(() => {
		fetchOrders().then(null);
		fetchFlowers().then(null);
	}, []);

	const fetchOrders = async () => {
		setIsLoading(true);
		const { success, data } = await getOrders();
		if (success) {
			setUsers(data);
		}
		setIsLoading(false);
	};

	const fetchFlowers = async () => {
		setIsLoading(true);
		const { success, data } = await getFlowers();

		if (success) {
			setFlowers(data);
		}
		setIsLoading(false);
	};

	const handleCreateClick = () => {
		alert("Create")
		setModal({
			isOpen: true,
			item: null,
			modalType: FLOWER_MODAL_TYPE.CREATE,
			name: "Create order",
		});
	};

	const flowerOptions = React.useMemo(
		() => [
			{
				Header: "sendersName",
				accessor: "sendersFullName",
			},
			{
				Header: "sendersPhone",
				accessor: "sendersPhoneNumber",
			},

			{
				Header: "address",
				accessor: "address",
			},

			{
				Header: "timeOfDelivery",
				accessor: "timeOfDelivery",
			},

			{
				Header: "Editable",
				accessor: "edit",
				Cell: (cell) => (
					<Button
						variant={"contained"}
						color={"primary"}
						onClick={handleEditClick(cell.row.original)}
					>
						Edit
					</Button>
				),
			},
			{
				Header: "Delete",
				accessor: "delete",
				Cell: (cell) => (
					<Button
						variant={"contained"}
						color={"error"}
						onClick={handleDeleteClick(cell.row.original)}
					>
						Delete
					</Button>
				),
			},
		],
		[],
	);
	const handleDeleteClick = (item) => {
		return () => {
			setModal({
				isOpen: true,
				item: item,
				modalType: FLOWER_MODAL_TYPE.DELETE,
				name: `Are you sure you want to delete the order "${item.sendersFullName}"?`,
			});
		};
	};

	const handleEditClick = (item) => {
		return () => {
			setModal({
				isOpen: true,
				item: item,
				modalType: FLOWER_MODAL_TYPE.UPDATE,
				name: `Edit order "${item.sendersFullName}"?`,
			});
		};
	};

	return (
		<>
			<OrdersCreateUpdateDeleteModal
				isOpen={modal.isOpen}
				item={modal.item}
				name={modal.name}
				modalType={modal.modalType}
				setModal={setModal}
				fetch={fetchOrders}
				flowersData={flowers}
			/>
			<FlowerTable
				createName='Order'
				columns={flowerOptions}
				data={users}
				handleCreateClick={handleCreateClick}
			/>
		</>
	);
}

export default Orders;
