import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { FLOWER_MODAL_TYPE } from "../../utills/constants/general";
import {
	editFlowers,
	createFlowers,
	delFlowers,
	uploadImageFlower,
	delImges,
} from "../../api/api";
import Modal from "@mui/material/Modal";
import BasicSelect from "./Select";

const FlowersCreateUpdateDeleteModal = ({
	isOpen,
	setModal,
	item,
	modalType,
	fetch,
	name,
}) => {
	const [form, setForm] = useState({
		name: "",
		price: null,
		rating: null,
		available: true,
		imageNames: [],
		category: "",
		block: false,
	});
	const [setError] = useState(null);
	useEffect(() => {
		if (modalType === FLOWER_MODAL_TYPE.UPDATE) {
			setForm((prev) => ({
				name: item?.name,
				price: item?.price,
				rating: item?.rating,
				available: item?.available,
				block: item?.block,
				imageNames: item?.image || [],
			}));
		}
		if (modalType === FLOWER_MODAL_TYPE.CREATE) {
			setForm((prev) => ({
				name: "",
				price: null,
				rating: null,
				available: true,
				imageNames: [],
			}));
		}
	}, [item, modalType]);

	const uploadImage = async (e) => {
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		try {
			const { success, data } = await uploadImageFlower(formData);
			if (success) {
				setForm((old) => ({
					...old,
					imageNames: [...old?.imageNames, `${data}`],
				}));
				toast.success("image upload successfully!");
			}
		} catch (e) {}
	};

	const onSubmit = async () => {
		let result = null;

		if (modalType === FLOWER_MODAL_TYPE.CREATE) {
			result = await createFlowers({
				...form,
				price: parseInt(form.price),
				rating: parseInt(form.rating),
			});
		} else if (modalType === FLOWER_MODAL_TYPE.UPDATE) {
			result = await editFlowers(form, item.id);
			toast.success("The change was successfully!");
		} else if (modalType === FLOWER_MODAL_TYPE.DELETE) {
			result = await delFlowers(item.id);
			toast.success("Block was successfully!");
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
	};

	const handleformChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
		setError("");
	};

	const deleteImage = async (event) => {
		event.stopPropagation();
		let myIndex = form.imageNames.indexOf(event.target.name);
		const { success, data } = await delImges(event.target.name);

		if (success) {
			toast.success(data);
		}
		if (myIndex !== -1 && form.imageNames.length < 2) {
			setForm((old) => ({
				...old,
				imageNames: [],
			}));
		} else if (myIndex !== -1) {
			setForm((old) => ({
				...old,
				imageNames: [...old?.imageNames].splice(myIndex, 1),
			}));
		}
	};
	return (
		<Modal open={isOpen} onClose={onModalClose} sx={{ overflow: "scroll" }}>
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
							value={form?.name}
							label='Title'
							name='name'
							onChange={handleformChange}
							autoComplete='off'
						/>
						<TextField
							autoComplete='off'
							type='number'
							value={form?.price}
							label='Price'
							name='price'
							onChange={handleformChange}
						/>
						<TextField
							type='number'
							autoComplete='off'
							value={form?.rating}
							name='rating'
							label='rating'
							onChange={handleformChange}
						/>
						<TextField
							autoComplete='off'
							type='text'
							value={form?.description}
							label='Description'
							name='description'
							onChange={handleformChange}
						/>
						<BasicSelect
							autoComplete='off'
							type='text'
							value={form?.available}
							label='Available'
							name='available'
							onChange={handleformChange}
						>
							<MenuItem value={true}>Yes</MenuItem>
							<MenuItem value={false}>No</MenuItem>
						</BasicSelect>
						<BasicSelect
							autoComplete='off'
							type='text'
							value={form?.category}
							label='Choose'
							name='category'
							onChange={handleformChange}
						>
							<MenuItem value={"InTheBasket"}>
								In the basket
							</MenuItem>
							<MenuItem value={"Bouquets"}>Bouquets</MenuItem>
							<MenuItem value={"InTheBox"}>In the BOX </MenuItem>
						</BasicSelect>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<input
								accept='image/*'
								style={{ display: "none" }}
								id='raised-button-file'
								multiple
								type='file'
								onChange={uploadImage}
							/>
							<label htmlFor='raised-button-file'>
								<Button variant='raised' component='span'>
									Upload image
								</Button>
							</label>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexFlow: "column",
								alignItems: "center",
								gap: "20px",
							}}
						>
							{form.imageNames &&
								form.imageNames.map((el, id) => (
									<Box key={el} sx={{ position: "relative" }}>
										<img
											width={400}
											height={200}
											key={id}
											src={
												el
													? `http://iflowerv2.us-east-1.elasticbeanstalk.com/api/public/files/${el}`
													: ""
											}
											alt={el}
										/>
										<Button
											name={el}
											sx={{
												position: "absolute",
												right: "0px",
												zIndex: "2",
												top: "0",
											}}
											onClick={deleteImage}
											color='error'
										>
											X
										</Button>
									</Box>
								))}
						</Box>
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
							width: "14rem",
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
								color={item.block ? "success" : "error"}
								onClick={onSubmit}
							>
								{item.block ? "UnBlock" : "Block"}
							</Button>
						)}
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

export default FlowersCreateUpdateDeleteModal;
