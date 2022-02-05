import React, { useState } from "react";
import classes from "../../assets/styles/SignUp.module.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { signUpForm } from "../../store/logIn/logIn-actions";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setUsernameHandler = (e) => setUsername(e.target.value);
  const setPasswordHandler = (e) => setPassword(e.target.value);
  const setPhoneHandler = (e) => setPhoneNumber(e.target.value);
  const setEmailHandler = (e) => setEmail(e.target.value);
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    return navigate("/flowers");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { username, phoneNumber, email, password };
    dispatch(signUpForm(data, navigateToHomePage));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div>
        <h1>Welcome back</h1>
      </div>
      <div>
        <div className={classes.inputs}>
          <input
            placeholder="username"
            onChange={setUsernameHandler}
            value={username}
          />
          <input
            placeholder="Email Address"
            onChange={setEmailHandler}
            value={email}
          />
          <input
            placeholder="Password"
            type={"password"}
            onChange={setPasswordHandler}
            value={password}
          />
          <input
            placeholder="phone number"
            type={"text"}
            onChange={setPhoneHandler}
            value={phoneNumber}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
