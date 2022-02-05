import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AccessDenied from "../Pages/AccessDenied";
import AdminPage from "../Pages/AdminPage";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import { ROLES, ROUTES } from "../utills/constants/general";
import PrivateRoute from "./PrivateRoute";

function MainRouter() {
  return (
    <Routes>
      <Route path="*" element={<Layout />} />
      <Route path={ROUTES.ACCESSDENIED} element={<AccessDenied />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route
        path={`${ROUTES.ADMIN}/*`}
        element={<PrivateRoute roles={ROLES.ADMIN} component={AdminPage} />}
      />
    </Routes>
  );
}

export default MainRouter;
