import classes from "../../assets/styles/Footer.module.css";
import icons from "../../assets/icons/icons";

import React from "react";

export default function Footer() {
	return (
		<>
			<footer>
				<div className={classes.title}>
					<span>
						<img src={icons[0]} alt='vk' />
						<img src={icons[1]} alt='facebook' />
						<img src={icons[2]} alt='instagram' />
					</span>
				</div>
			</footer>
		</>
	);
}
