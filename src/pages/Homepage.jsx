import React from 'react';
import { Card, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

import AuthenticationIcon from '../assets/icons/authentication.svg';
import ContextIcon from '../assets/icons/context.svg';
import EventIcon from '../assets/icons/event.svg';
import HTTPRequestIcon from '../assets/icons/http-request.svg';
import LifeCycleIcon from '../assets/icons/lifecycle.svg';
import MediaHandlingIcon from '../assets/icons/media-handling.svg';
import RoutingIcon from '../assets/icons/routing.svg';
import StateManagementIcon from '../assets/icons/state-management.svg';
import WebStorageIcon from '../assets/icons/storage.svg';
import TestingIcon from '../assets/icons/testing.svg';

const menus = [
	{
		name: 'React Event',
		icon: EventIcon,
		link: '/event',
	},
	{
		name: 'Routing',
		icon: RoutingIcon,
		link: '/routing',
	},
	{
		name: 'HTTP Request',
		icon: HTTPRequestIcon,
		link: '/http-request',
	},
	{
		name: 'React Lifecycle',
		icon: LifeCycleIcon,
		link: '/react-lifecycle',
	},
	{
		name: 'State Management',
		icon: StateManagementIcon,
		link: '/state-management',
	},
	{
		name: 'React Context API',
		icon: ContextIcon,
		link: '/context',
	},
	{
		name: 'Media Handling',
		icon: MediaHandlingIcon,
		link: '/media-handling',
	},
	{
		name: 'Web Storage',
		icon: WebStorageIcon,
		link: '/storage',
	},
	{
		name: 'Testing',
		icon: TestingIcon,
		link: '/testing',
	},
	{
		name: 'Authentication',
		icon: AuthenticationIcon,
		link: '/authentication',
	},
];

const Homepage = () => {
	return (
		<Stack py={8} spacing={4} maxWidth="95vw">
			<Stack direction="row" justifyContent="center">
				<Typography fontSize={52} fontWeight="bold" color={grey[700]}>
					React Tutorial
				</Typography>
			</Stack>

			<Grid container columns={24} spacing={4}>
				{menus.map(({ icon, name, link }) => {
					return (
						<Grid item xs={24} md={12} lg={8}>
							<Link to={link}>
								<Card raised sx={{ borderRadius: 5 }}>
									<Stack alignItems="center" p={5}>
										<img src={icon} alt={name} width="100%" />

										<Typography
											fontSize={24}
											fontWeight="medium"
											color={grey[700]}
										>
											{name}
										</Typography>
									</Stack>
								</Card>
							</Link>
						</Grid>
					);
				})}
			</Grid>
		</Stack>
	);
};

export default Homepage;
