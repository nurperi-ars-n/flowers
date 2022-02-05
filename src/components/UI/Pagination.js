import React from "react";
import { Pagination } from "@mui/material";

const StyledPagination = (props) => {
	return <Pagination siblingCount={1} boundaryCount={1} {...props} />;
};

export default StyledPagination;
