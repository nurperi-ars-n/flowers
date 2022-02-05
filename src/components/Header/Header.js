import classes from "../../assets/styles/Header.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import Menu from "../UI/Menu";
import Button from "../UI/Button";
import MenuComponent from "../UI/MenuComp";
import { MenuItem } from "@mui/material";
import { getFlowersStore, getFlowersAvalaible } from "../../store/flowerAction";

export default function Header() {
	const [categories] = useState(["Bouquets", "InTheBox", "InTheBasket"]);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFlowersStore());
	}, []);

	function popularFirst(event) {
		dispatch(getFlowersStore(event.target.textContent));
	}
	function getAll() {
		dispatch(getFlowersStore(""));
	}

	function getAvalaible() {
		dispatch(getFlowersAvalaible("available=true"));
	}

	return (
		<header className={classes.header}>
			<div className={classes.about}>
				<div className={classes.aboutLeft}>
					<Menu />
				</div>
				<div className={classes.mainLogo}>
					<Link to='/'>
						<h1 className={classes.logo}>IFLOWERS</h1>
						<b>Just For You...</b>
					</Link>
				</div>
				<div className={classes.aboutRight}>
					<CartButton />
				</div>
			</div>
			<nav className={classes.nav}>
				<Button className={classes.btn}>M</Button>
				{categories?.map((el) => (
					<li key={el} name={el} onClick={popularFirst}>
						{el}
					</li>
				))}
				<MenuComponent color='gray' title='Choose'>
					<MenuItem onClick={getAvalaible}>In stock</MenuItem>
					<MenuItem onClick={getAll}>All</MenuItem>
				</MenuComponent>
			</nav>
		</header>
	);
}
