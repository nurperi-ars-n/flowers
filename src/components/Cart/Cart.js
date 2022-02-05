import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../assets/styles/Cart.module.css";
import { addItem, removeItem } from "../../store/cartSlice";
import Button from "../UI/Button";

export default function Cart() {
	const flowers = useSelector((state) => state.cart.items);

	const dispatch = useDispatch();

	function addItemHandler(item) {
		dispatch(addItem(item));
	}

	function removeItemHandler(id) {
		dispatch(removeItem(id));
	}

	return (
		<div className={classes.container}>
			<h1>In the basket</h1>
			<hr />
			{flowers.map((flower) => (
				<React.Fragment key={flower.id}>
					<div key={flower.id} className={classes.itemWrapper}>
						<div>
							<b>{flower.totalPrice} </b>

							<div className={classes.changeQuantity}>
								<Button
									onClick={removeItemHandler.bind(
										null,
										flower.id,
									)}
								>
									-
								</Button>
								<span>{flower.quantity}</span>
								<Button
									onClick={addItemHandler.bind(null, flower)}
								>
									+
								</Button>
							</div>
						</div>
					</div>
					<hr />
				</React.Fragment>
			))}
		</div>
	);
}
