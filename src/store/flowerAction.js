import { url } from "../api/api";
import { getMyFlowers } from "./flowerSlice";

export const getFlowersStore = (category = null, page = "1") => {
	return async (dispatch) => {
		const fetchData = async () => {
			const OPTIONS = {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			};
			let res = "";
			if (category) {
				res = await fetch(
					`${url}api/public/flowers?page=${page}&size=10&category=${category}`,
					OPTIONS,
				);
			} else {
				res = await fetch(
					`${url}api/public/flowers?page=${page}&size=10`,
					OPTIONS,
				);
			}
			const data = await res.json();
			console.log(data, "data");

			return data;
		};

		try {
			const flowers = await fetchData();
			dispatch(getMyFlowers({ flowers, category }));
		} catch (e) {
			alert(e);
		}
	};
};

export const getFlowersAvalaible = (avalaible, page = "1") => {
	console.log(avalaible, "asdd");
	return async (dispatch) => {
		const fetchData = async () => {
			const OPTIONS = {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			};
			let res = "";
			if (avalaible) {
				res = await fetch(
					`${url}api/public/flowers?page=${page}&size=20&${avalaible}`,
					OPTIONS,
				);
			} else {
				res = await fetch(
					`${url}api/public/flowers?page=${page}&size=20`,
					OPTIONS,
				);
			}
			const data = await res.json();

			return data;
		};

		try {
			const flowers = await fetchData();
			dispatch(getMyFlowers({ flowers, avalaible }));
		} catch (e) {
			alert(e);
		}
	};
};
