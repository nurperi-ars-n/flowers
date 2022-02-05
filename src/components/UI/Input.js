import * as React from "react";
import TextField from "@mui/material/TextField";

function Input(props) {
	return (
		<TextField
			autoComplete='off'
			id='outlined-basic'
			variant='outlined'
            style={{height:'20px'}}
			{...props}
		/>
	);
}
export default Input;
