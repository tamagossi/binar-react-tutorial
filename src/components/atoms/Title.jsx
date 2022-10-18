import React from 'react';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const AtomTitle = ({ children, ...props }) => {
	return (
		<Typography color={grey[700]} fontSize={22} fontWeight="medium" {...props}>
			{children}
		</Typography>
	);
};

export default AtomTitle;
