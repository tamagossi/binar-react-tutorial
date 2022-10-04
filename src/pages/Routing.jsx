import React from 'react';
import { Divider, Image } from 'antd';
import { Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Stack } from '@mui/system';

import MainLayout from '../layouts/Main';

import InstallationImage from '../assets/images/routing/installation.png';
import RoutingConfigJSXImage from '../assets/images/routing/routing-config-jsx.png';
import RoutingConfigArrayImage from '../assets/images/routing/routing-config-array.png';
import RoutingLinkImage from '../assets/images/routing/routing-link.png';
import RoutingNavigateImage from '../assets/images/routing/routing-navigate.png';
import RoutingParamConfigImage from '../assets/images/routing/params-config.png';
import RoutingParamUsageImage from '../assets/images/routing/params-usage.png';
import RoutingQueryUsageImage from '../assets/images/routing/query-usage.png';

const RoutingPage = () => {
	return (
		<MainLayout
			title="React Routing"
			description="Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application"
			image="https://www.loginradius.com/blog/static/a53096b6796dd3d1e3f3df8bc77a6689/03979/index.png"
		>
			<Stack spacing={1}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Background
				</Typography>

				<Stack direction="row" justifyContent="center" width="100%">
					<Image
						src="https://www.edureka.co/blog/wp-content/uploads/2017/09/routing_blog.png"
						width="50%"
					/>
				</Stack>

				<Typography color={grey[500]} fontSize={16}>
					Since React is CSR library, we can't access page by requesting to the server. So
					we need some library to handle url changes to render certain view
				</Typography>
			</Stack>

			<Divider />

			<Stack spacing={1}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Installation
				</Typography>

				<Image src={InstallationImage} width="50%" />
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Basic Usage / Common API Usage
				</Typography>

				<Stack spacing={1}>
					<Typography color={grey[700]} fontSize={16} fontWeight="bold">
						Basic Configuration
					</Typography>

					<Grid container columns={24} spacing={10}>
						<Grid xs={24} lg={12}>
							<Image src={RoutingConfigArrayImage} width="95%" />
						</Grid>

						<Grid xs={24} lg={12}>
							<Image src={RoutingConfigJSXImage} width="95%" />
						</Grid>
					</Grid>
				</Stack>

				<Stack spacing={1}>
					<Typography color={grey[700]} fontSize={16} fontWeight="bold">
						Directed to Another Page
					</Typography>

					<Grid container columns={24} spacing={10}>
						<Grid xs={24} lg={12}>
							<Stack spacing={1}>
								<Image src={RoutingNavigateImage} width="95%" />

								<Typography>
									<a href="https://reactrouter.com/en/v6.3.0/api#link">
										API Reference
									</a>
								</Typography>
							</Stack>
						</Grid>

						<Grid xs={24} lg={12}>
							<Stack spacing={1}>
								<Image src={RoutingLinkImage} width="95%" />

								<Typography>
									<a href="https://reactrouter.com/en/v6.3.0/api#usenavigate">
										API Reference
									</a>
								</Typography>
							</Stack>
						</Grid>
					</Grid>
				</Stack>

				<Divider />

				<Stack spacing={1}>
					<Typography color={grey[700]} fontSize={16} fontWeight="bold">
						Using URL Params
					</Typography>

					<Grid container columns={24} spacing={10}>
						<Grid xs={24} lg={12}>
							<Stack spacing={1}>
								<Image src={RoutingParamConfigImage} width="95%" />

								<Typography>
									<a href="https://reactrouter.com/en/v6.3.0/api#useparams">
										API Reference
									</a>
								</Typography>
							</Stack>
						</Grid>

						<Grid xs={24} lg={12}>
							<Image src={RoutingParamUsageImage} width="95%" />
						</Grid>
					</Grid>
				</Stack>

				<Divider />

				<Stack spacing={1}>
					<Typography color={grey[700]} fontSize={16} fontWeight="bold">
						Using URL Query
					</Typography>

					<Grid container columns={24} spacing={10}>
						<Grid xs={24} lg={12}>
							<Image src={RoutingQueryUsageImage} width="95%" />
						</Grid>
					</Grid>
				</Stack>
			</Stack>

			<Divider />

			<Typography>
				<a href="https://reactrouter.com/en/main">Official React Router Documentation</a>
			</Typography>
		</MainLayout>
	);
};

export default RoutingPage;
