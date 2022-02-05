import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

function Spinner(props) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			{...props}
		>
			<CircularProgress />
		</Box>
	);
}

export default Spinner;
