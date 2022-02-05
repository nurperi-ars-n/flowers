import { createSlice } from "@reduxjs/toolkit";
import { getLocal, removeLocal } from "../../helpers/localStorage";

const isRole = getLocal("ROLE") || "";
const access = getLocal("JWT_Token") || null;
const username = getLocal("username") || null;
let isAuth = !!access || false;

export const initialState = {
	username: username,
	fullname: "",
	phoneNumber: "",
	email: "",
	role: isRole,
	isAuth: isAuth,
	accessToken: access,
	error: false,
};

export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		signUp(state, action) {
			state.email = action.payload.email;
			state.phoneNumber = action.payload.phoneNumber;
			state.valueBtn = action.payload.fullname;
		},
		logIn(state, action) {
			state.role = action.payload.role;
			state.username = action.payload.username;
			state.isAuth = !!action.payload.token;
			state.accessToken = action.payload.token;
		},
		logOut(state, action) {
			state.role = null;
			state.username = "";
			state.isAuth = false;
			state.accessToken = "";
			removeLocal("JWT_Token");
			removeLocal("ROLE");
			removeLocal("isAuth", false);
		},
	},
});

export const { logIn, logOut, signUp } = authSlice.actions;

export default authSlice.reducer;
