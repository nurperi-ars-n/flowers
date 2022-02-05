import axios from "axios";
import store from "./../store/index";

console.log(store.getState().auth.accessToken, "access");
export const accessToken = () => store.getState().auth.accessToken || "";
const token = JSON.parse(localStorage.getItem("JWT_Token"));
console.log(token, "access");

export const updateAxiosInstance = (axiosInstance) => {
	axiosInstance.interceptors.request.use(
		(config) => {
			const token = accessToken();

			if (token) {
				config.headers.Authorization = `Bearer_${token}`;
			} else {
				delete axiosInstance.defaults.headers.common.Authorization;
			}
			return config;
		},

		(error) => Promise.reject(error),
	);
};

const url = "http://iflowerv2.us-east-1.elasticbeanstalk.com/";
const bearer = token ? `Bearer_${token}` : "";
export const axiosInstance = axios.create({
	baseURL: url,
	timeout: 10000,
	headers: {
		Authorization: bearer,
		"Content-Type": "application/json",
		accept: "application/json",
	},
});
