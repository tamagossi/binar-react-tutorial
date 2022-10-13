import React from 'react';
import { Image } from 'antd';
import { grey } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import MainLayout from '../layouts/Main';

const ReactLifeCyclePage = () => {
	return (
		<MainLayout
			title="React Lifecycle"
			description="You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death."
			image="https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png"
		>
			<Stack spacing={1}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					A Event flow in React
				</Typography>

				<Stack direction="row" justifyContent="center" width="100%">
					<Image
						src="https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1"
						width="80%"
					/>
				</Stack>

				<Typography>
					<a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
						Official Docs
					</a>
				</Typography>
			</Stack>
		</MainLayout>
	);
};

export default ReactLifeCyclePage;
