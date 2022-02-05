import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ContentItem from "../components/Content/ContentItem";
import Content from "../components/Content/Content";
import CartWrapper from "../components/Cart/CartWrapper";
import { ROUTES } from "../utills/constants/general";
import { useDispatch } from "react-redux";
import { getMyFlowers } from "../store/flowerSlice";

export default function RouteContent() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyFlowers);
	}, []);
	return (
		<Routes>
			<Route path='/' element={<Navigate to={ROUTES.FLOWERS} />} />
			<Route path={ROUTES.FLOWERS} element={<Content />} />
			<Route path='flowers/:flowerId' element={<ContentItem />} />
			<Route path={ROUTES.CART} element={<CartWrapper />} />
		</Routes>
	);
}
