import React, { useEffect, useState } from "react";
import classes from "../../assets/styles/Content.module.css";
import Card from "../UI/Card";
import StyledPagination from "../UI/Pagination";
import { Box } from "@mui/system";
import { axiosInstance } from "../../api/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { getFlowersStore } from "../../store/flowerAction";

export default function Content() {
	const displatch = useDispatch();
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const loadPosts = async () => {
		const res = await axiosInstance.get(
			`api/public/flowers?page=${page}&size=10`,
		);
		setPosts(res.data);
	};
	const flowers = useSelector((state) => state.flowers.flowers);
	const avalaible = useSelector((state) => state.flowers.avalaible);
	const category = useSelector((state) => state.flowers.category);

	console.log(useSelector((state) => state.flowers));
	useEffect(() => {
		if (category) {
			displatch(getFlowersStore(category, page));
		} else if (!category) {
			displatch(getFlowersStore(null, page));
		} else if (avalaible) {
			displatch(getFlowersStore(avalaible, page));
		} else {
			displatch(getFlowersStore(null, page));
		}
	}, [page]);

	return (
		<div className={classes.container}>
			<div className={classes.flowersBlock}>
				{flowers?.map((item) => (
					<Card
						style={{ width: "300px", height: "390px" }}
						key={item.id}
						className={classes.flower}
						item={item}
					/>
				))}
			</div>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<StyledPagination
					defaultPage={page}
					count={15}
					onChange={(e, value) => setPage(value)}
				/>
			</Box>
		</div>
	);
}
