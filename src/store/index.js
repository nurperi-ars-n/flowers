import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import flowerSlice from "./flowerSlice";
import authSlice from "./logIn/loginSlice";
import usersSlice from "./users/usersSlice";

const store = configureStore({
	reducer: {
		flowers: flowerSlice, 
		cart: cartSlice,
		users: usersSlice,
		auth: authSlice,
		devtools: true
	},
});

export default store;
