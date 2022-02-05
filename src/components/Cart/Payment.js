import classes from "../../assets/styles/Payment.module.css";

import React from "react";
import DatePickers from "../UI/DatePicker";
import PAYModal from "../UI/Modal";
import { useState } from "react";

export default function Payment() {
	const [setForm] = useState({
		recipientFullName: "",
		recipientPhoneNumber: "",
		address: "",
		sendersFullName: "",
		sendersPhoneNumber: "",
		comment: "",
	});
	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	return (
		<div className={classes.container}>
			<h1>Checkout</h1>
			<div className={classes.paymentBlock}>
				<div>
					<h3>Recipient</h3>
					<div className={classes.inputWrapper}>
						<input placeholder='name' name='recipientFullName' />
						<input
							placeholder='number'
							type='number'
							name='recipientPhoneNumber'
						/>
					</div>
				</div>

				<div>
					<h3>Address and time of delivery</h3>
					<div className={classes.inputWrapper}>
						<input placeholder='Address' name='address' />
						<DatePickers onChange={handleChange} />
					</div>
				</div>

				<div>
					<h3>Sender</h3>
					<div className={classes.inputWrapper}>
						<input placeholder='Your name' name='sendersFullName' />
						<input
							placeholder='Your number'
							type='text'
							name='sendersPhoneNumber'
						/>
					</div>
				</div>
				<PAYModal />
			</div>
		</div>
	);
}
