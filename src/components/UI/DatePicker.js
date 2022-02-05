import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function NativePickers(props) {
	return (
		<Stack component='form' noValidate spacing={3}>
			<TextField
				id='datetime-local'
				label='Date and time'
				type='datetime-local'
				defaultValue='2017-05-24T10:30'
				sx={{ width: 290 }}
				InputLabelProps={{
					shrink: true,
				}}
				{...props}
			/>
		</Stack>
	);
}
