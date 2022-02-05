import * as React from "react";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BasicSelect({ label, name, value, onChange, children }) {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={value}
				name={name}
				label={label}
				onChange={onChange}
			>
				{children}
			</Select>
		</FormControl>
	);
}

export default BasicSelect;
