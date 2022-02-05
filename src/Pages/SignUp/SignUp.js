import classes from "../../assets/styles/SignUp.module.css";
import React from "react";
import SignUpForm from "../../components/UI/SignUpForm";

function SignUp() {
	return (
		<div className={classes.contentSignUp}>
			<SignUpForm />
		</div>
	);
}

export default SignUp;
