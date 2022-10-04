import React from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';
import { KeyboardBackspaceOutlined } from '@mui/icons-material';

import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const MainLayout = ({ title, description, image, children }) => {
	const navigate = useNavigate();

	return (
		<Box p={5} px={20}>
			<Stack alignItems="start" spacing={2}>
				<Button
					startIcon={<KeyboardBackspaceOutlined />}
					onClick={() => navigate('/')}
					variant="text"
					type="button"
					color="secondary"
				>
					Back
				</Button>

				{image && (
					<Stack direction="row" justifyContent="center" width="100%">
						<img alt="header" src={image} width="50%" />
					</Stack>
				)}

				<Stack width="100%" spacing={0}>
					<Typography color={grey[700]} fontSize={52} fontWeight="medium">
						{title}
					</Typography>

					<Typography color={grey[500]} fontSize={20}>
						{description}
					</Typography>
				</Stack>
			</Stack>

			<Stack mt={7} spacing={4}>
				{children}
			</Stack>
		</Box>
	);
};

export default MainLayout;
