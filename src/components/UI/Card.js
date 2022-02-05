import React from "react";
import { Link } from "react-router-dom";

export default function Card({ className, item }) {
	const { id, image, name, price, stars } = item;

	return (
		<div className={className}>
			<Link to={`/flowers/${id}`}>
				<div width={293} height={381}>
					<img
						src={
							image
								? `http://iflowerv2.us-east-1.elasticbeanstalk.com/api/public/files/${image[0]}`
								: ""
						}
						alt='flower'
					/>
					<p>{name}</p>
					<span>
						от {price} тг ☆ {stars}
					</span>
				</div>
			</Link>
		</div>
	);
}
