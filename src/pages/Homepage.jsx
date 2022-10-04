import React from 'react';
import { Card, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

import EventIcon from '../assets/icons/event.svg';
import RoutingIcon from '../assets/icons/routing.svg';

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
];

const Homepage = () => {
	return (
		<Stack width="100vw" padding={8} spacing={4}>
			<Stack direction="row" justifyContent="center">
				<Typography fontSize={52} fontWeight="bold" color={grey[700]}>
					React Tutorial
				</Typography>
			</Stack>

			<Grid container columns={24} spacing={4} justifyContent="center">
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
