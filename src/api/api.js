import axios from "axios";
import { axiosInstance } from "./axiosInstance";

export const url = "http://iflowerv2.us-east-1.elasticbeanstalk.com/";

export const getUsers = async () => {
	try {
		const response = await axiosInstance.get("api/admin/users");
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const delUsers = async (id) => {
	try {
		const response = await axiosInstance.delete(`api/admin/users/${id}`);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const getFlowers = async () => {
	try {
		const response = await axiosInstance.get(
			"api/public/flowers?page=1&size=100",
		);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const getFlowersAdmin = async () => {
	try {
		const response = await axiosInstance.get(
			"api/admin/flowers?page=1&size=100",
		);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const getCategories = async () => {
	try {
		const response = await axiosInstance.get("api/public/flowers/category");
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const uploadImageFlower = async (body) => {
	try {
		const response = await axiosInstance.post(`api/admin/files`, body);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const editFlowers = async (flower, id) => {
	try {
		const response = await axiosInstance.put(
			`api/admin/flowers/${id}`,
			flower,
		);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const delFlowers = async (id) => {
	try {
		const response = await axiosInstance.put(
			`api/admin/flowers/block/${id}`,
		);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const delImges = async (name) => {
	try {
		const response = await axiosInstance.delete(`api/admin/files/${name}`);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const createFlowers = async (flower) => {
	try {
		const response = await axiosInstance.post("api/admin/flowers", flower);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const getOrders = async () => {
	try {
		const response = await axiosInstance.get("api/admin/orders");
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const createOrder = async (order) => {
	try {
		const response = await axios.post(
			"http://iflowerv2.us-east-1.elasticbeanstalk.com/api/public/orders",
			order,
		);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const editOrders = async (order, id) => {
	try {
		const response = await axiosInstance.put(
			`api/admin/orders/${id}`,
			order,
		);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const delOrders = async (id) => {
	try {
		const response = await axiosInstance.delete(`api/admin/orders/${id}`);
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
