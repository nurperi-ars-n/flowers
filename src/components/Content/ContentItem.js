import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import classes from "../../assets/styles/ContentItem.module.css";
import Button from "../UI/Button";
import { Breadcrumbs, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { axiosInstance } from "../../api/axiosInstance";

export default function ContentItem() {
	const dispatch = useDispatch();
	const [post, setPost] = useState(null);
	const [isOpen, setIsOpen] = useState();

	const loadPost = async () => {
		const res = await axiosInstance.get(`api/public/flowers${flowerId}`);
		setPost(res.data);
	};

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { flowerId } = useParams();

	const flower = useSelector(
		(state) =>
			state.flowers.flowers.filter(
				(flower) => flower.id + "" === flowerId,
			)[0],
	);
	console.log(flower, "flpwer");
	useEffect(() => {
		if (!flower) {
			loadPost();
		} else {
			setPost(flower);
		}
	}, []);
	const handleModal = () => {
		dispatch(addItem(flower));
		toast.success("Order added to cart!");
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className={classes.container}>
				<Breadcrumbs aria-label='breadcrumb'>
					<Link to='/flowers'>Back to Catalog</Link>
					<Typography color='textPrimary' sx={{ cursor: "pointer" }}>
						{post?.name}
					</Typography>
				</Breadcrumbs>
				<div className={classes.wrapper}>
					<div className={classes.img}>
						<img
							style={{ width: "420px" }}
							src={`http://iflowerv2.us-east-1.elasticbeanstalk.com/api/public/files/${post?.image[0]}`}
							alt='flower'
						/>
					</div>

					<div>
						<div
							style={{
								alignItems: "center",
							}}
						>
							<h1 style={{ fontWeight: "bold" }}>{post?.name}</h1>
							<h3>☆ {post?.rating}</h3>
						</div>

						<div>
							<h1>{post?.price} $</h1>
							<Button onClick={handleModal}>
								Add to Shopping Cart
							</Button>
							<p>Delivery and clearance</p>
						</div>
						<div className={classes.about}>
							<ul className={classes.aboutList}>
								<p>About payment methods</p>
								<b>Credit card, PayPal</b>
							</ul>
							<ul className={classes.aboutList}>
								<p>Description</p>
								<b>{post?.description}</b>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
