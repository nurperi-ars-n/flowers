import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { FLOWER_MODAL_TYPE } from "../../utills/constants/general";
import {   createOrder, editOrders, delOrders } from "../../api/api";
import Modal from "@mui/material/Modal";
import BasicSelect from "./Select";
import DatePickers from "../UI/DatePicker";

const OrdersCreateUpdateDeleteModal = ({
	isOpen,
	setModal,
	item,
	modalType,
	fetch,
	name,
	flowersData = [],
}) => {
	const [form, setForm] = useState({
		sendersFullName: "",
		sendersPhoneNumber: "",
		address: "",
		recipientFullName: "",
		recipientPhoneNumber: "",
		timeOfDelivery: "",
		comment: "",
		distance: "",
		orders: [],
	});
	const [setError] = useState(null);

	useEffect(() => {
		if (modalType === FLOWER_MODAL_TYPE.UPDATE) {
			setForm((prev) => ({
				sendersFullName: item.sendersFullName,
				sendersPhoneNumber: item.sendersPhoneNumber,
				address: item.address,
				recipientFullName: item.recipientFullName,
				recipientPhoneNumber: item.recipientPhoneNumber,
				timeOfDelivery: item.timeOfDelivery,
				comment: item.comment,
				distance: item.distance,
				orders: [],
			}));
		}
	}, [item, modalType]);

	useEffect(() => {
	
	}, [form, item, modalType, flowersData]);

	const onSubmit = async () => {
		let result = null;
		if (modalType === FLOWER_MODAL_TYPE.CREATE) {
			result = await createOrder(form);
		} else if (modalType === FLOWER_MODAL_TYPE.UPDATE) {
			result = await editOrders(form, item.id);
		} else if (modalType === FLOWER_MODAL_TYPE.DELETE) {
			result = await delOrders(item.id);
		}

		if (result && result.success) {
			toast.success("Creation was successfully!");
			fetch();
			onModalClose();
		} else {
			toast.error("Что-то пошло не так при загрузке данных...");
		}
	};

	const onModalClose = () => {
		setModal(false);
		setForm({
			sendersFullName: "",
			sendersPhoneNumber: "",
			address: "",
			recipientFullName: "",
			recipientPhoneNumber: "",
			timeOfDelivery: "",
			comment: "",
			distance: "",
			orders: [],
		})
	};

	const handleformChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
		setError("");
	};

	const handleSelectChange = (event) => {
		setForm((prev) => ({
			...prev,
			orders: [
				...prev.orders,
				{
					flowerId: event.target.value.id,
					amount: 1,
					price: 200,
				},
			],
		}));
	};
	return (
		<Modal open={isOpen} onClose={onModalClose}>
			<Box
				sx={{
					position: "absolute",
					top: "20%",
					left: "30%",
					right: "30%",
					bottom: "10%",
					transform: "translate(-50% -50%)",
					background: "white",
					border: "2px solid black",
					borderRadius: "20px",
					p: 4,
					overflow: "auto",
				}}
			>
				<Box closeButton>
					<Typography variant='h4' mb={4}>
						{name}
					</Typography>
				</Box>

				{modalType === FLOWER_MODAL_TYPE.DELETE ? null : (
					<Box
						sx={{
							display: "flex",
							flexFlow: "column",
							gap: "1.5rem",
						}}
						mb={2}
					>
						<TextField
							type='text'
							autoFocus
							value={form?.sendersFullName}
							label='Senders Full Name'
							name='sendersFullName'
							onChange={handleformChange}
							autoComplete='off'
						/>
						<TextField
							autoComplete='off'
							type='text'
							value={form?.sendersPhoneNumber}
							label='Senders Phone Number'
							name='sendersPhoneNumber'
							onChange={handleformChange}
						/>
						<TextField
							type='text'
							autoComplete='off'
							value={form?.address}
							name='address'
							label='Address'
							onChange={handleformChange}
						/>
						<TextField
							autoComplete='off'
							type='text'
							value={form?.recipientFullName}
							label='Recipient Full Name'
							name='recipientFullName'
							onChange={handleformChange}
						/>
						<TextField
							autoComplete='off'
							type='text'
							value={form?.comment}
							label='Comment'
							name='comment'
							onChange={handleformChange}
						/>
						<BasicSelect
							autoComplete='off'
							type='text'
							value={form?.available}
							label='Orders'
							name='orders'
							onChange={handleSelectChange}
						>
							{flowersData &&
								flowersData.map((el) => (
									<MenuItem key={el.id} value={el}>
										{el?.name}
									</MenuItem>
								))}
						</BasicSelect>
						<TextField
							autoComplete='off'
							type='text'
							value={form?.distance}
							label='Distance'
							name='distance'
							onChange={handleformChange}
						/>
						<TextField
							autoComplete='off'
							type='text'
							value={form?.timeOfDelivery}
							label='Time Of Delivery'
							name='timeOfDelivery'
							onChange={handleformChange}
						/>
						<DatePickers />
					</Box>
				)}

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
							width: "14	rem",
							justifyContent: "space-between",
						}}
					>
						<Button
							variant='contained'
							color={
								modalType === FLOWER_MODAL_TYPE.DELETE
									? "info"
									: "error"
							}
							onClick={onModalClose}
						>
							Отмена{" "}
						</Button>
						{modalType === FLOWER_MODAL_TYPE.CREATE && (
							<Button
								variant='contained'
								color='info'
								onClick={onSubmit}
							>
								Создать
							</Button>
						)}
						{modalType === FLOWER_MODAL_TYPE.UPDATE && (
							<Button
								variant='contained'
								color='info'
								onClick={onSubmit}
							>
								Сохранить
							</Button>
						)}
						{modalType === FLOWER_MODAL_TYPE.DELETE && (
							<Button
								variant='contained'
								color='error'
								onClick={onSubmit}
							>
								Удалить
							</Button>
						)}
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

export default OrdersCreateUpdateDeleteModal;
