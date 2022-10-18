import React from 'react';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const AtomText = ({ children, ...props }) => {
	return (
		<Typography color={grey[500]} fontSize={16} {...props}>
			{children}
		</Typography>
	);
};

export default AtomText;
