import classes from "../../assets/styles/Login.module.css";
import React from "react";
import LoginForm from "../../components/UI/LoginForm";

function Login() {
  return (
    <div className={classes.container}>
      <LoginForm />
    </div>
  );
}

export default Login;
