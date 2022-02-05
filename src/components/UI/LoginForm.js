import { Button } from "@mui/material";
import classes from "../../assets/styles/Login.module.css";
import React from "react";
import { loginForm } from "../../store/logIn/logIn-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [username, setUsername] = React.useState("nupa@gmail.com");
	const [password, setPassword] = React.useState("haha22");
	const [error, setError] = React.useState(false);

	const setUsernameHandler = (e) => setUsername(e.target.value);
	const setPasswordHandler = (e) => setPassword(e.target.value);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const navigateToAdminPage = () => {
		return navigate("/admin");
	};
	const navigateToMainPage = () => {
		return navigate("/flowers");
	};

	function submitHandler(e) {
		e.preventDefault();

		if (!username.trim() && !password.trim())
			return setError(<div className={classes.error}>error</div>);
		setError(false);

		let data = { username, password };
		dispatch(loginForm(data, navigateToAdminPage, navigateToMainPage));
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div>
				<h1>Welcome back</h1>
			</div>
			<div>
				<div className={classes.inputs}>
					<input
						placeholder='Email Adress'
						onChange={setUsernameHandler}
						value={username}
					/>
					<input
						placeholder='Password'
						type={"password"}
						onChange={setPasswordHandler}
						value={password}
					/>
					{error}
				</div>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.submitButton}
				>
					Submit
				</Button>
			</div>
		</form>
	);
}
// {/* <LoginForm/// Х.* БДщпштАщкь.Ю *.Ъ
// > */}
