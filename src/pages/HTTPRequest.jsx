import React from 'react';
import { Divider, Image } from 'antd';
import { grey } from '@mui/material/colors';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/system';

import MainLayout from '../layouts/Main';

import AxiosBasicUsageImage from '../assets/images/http/basic-usage.png';
import AxiosResponseImage from '../assets/images/http/response.png';
import InstallationImage from '../assets/images/http/installation.png';
import NativeFetchImage from '../assets/images/http/fetch.png';

const NetworkRequestPage = () => {
	return (
		<MainLayout
			title="HTTP Request"
			description="An HTTP request is made by a client, to a named host, which is located on a server. The aim of the request is to access a resource on the server. To make the request, the client uses components of a URL (Uniform Resource Locator), which includes the information needed to access the resource."
			image="https://v3b4d4f5.rocketcdn.me/wp-content/uploads/2021/09/HTTP-requests-between-the-web-browser-and-the-server.png"
		>
			<Stack spacing={1}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					A Brief
				</Typography>

				<Stack direction="row" justifyContent="center" width="100%">
					<Image
						src="https://bacabagus101.files.wordpress.com/2018/12/download-5.png"
						width="50%"
					/>
				</Stack>

				<Typography color={grey[500]} fontSize={16}>
					There 4 basic HTTP request method that commonly used, which are
				</Typography>

				<ul>
					{[
						'CREATE | represented by POST',
						'READ | represented by GET',
						'UPDATE | represented by PUT',
						'DELETE | represented by DELETE',
					].map((method) => {
						return (
							<li>
								<Typography color={grey[500]} fontSize={16}>
									{method}
								</Typography>
							</li>
						);
					})}
				</ul>

				<Typography>
					<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods">
						API Reference
					</a>
				</Typography>
			</Stack>

			<Divider />

			<Stack spacing={1}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Native javascript fetch
				</Typography>
				<Typography color={grey[500]} fontSize={16}>
					Javascript has its own fetch function, as you can see the example below:
				</Typography>

				<Stack direction="row" justifyContent="center">
					<Image src={NativeFetchImage} width="50%" />
				</Stack>
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Axios
				</Typography>

				<Typography color={grey[500]} fontSize={16}>
					Axios is a promise-based HTTP Client for node.js and the browser. It is
					isomorphic (= it can run in the browser and nodejs with the same codebase). On
					the server-side it uses the native node.js http module, while on the client
					(browser) it uses XMLHttpRequests.
				</Typography>

				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Motivation
				</Typography>

				<ul>
					{[
						'Make XMLHttpRequests from the browser',
						'Make http requests from node.js',
						'Supports the Promise API',
						'Intercept request and response',
						'Transform request and response data',
						'Cancel requests',
						'Automatic transforms for JSON data',
						'Client side support for protecting against XSRF',
					].map((method) => {
						return (
							<li>
								<Typography color={grey[500]} fontSize={16}>
									{method}
								</Typography>
							</li>
						);
					})}
				</ul>

				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Installation
				</Typography>

				<Image src={InstallationImage} width="50%" />
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Basic Usage
				</Typography>

				<Grid container columns={24} spacing={10}>
					<Grid xs={24} lg={12}>
						<Image src={AxiosBasicUsageImage} width="95%" />
					</Grid>

					<Grid xs={24} lg={12}>
						<Stack>
							<Typography color={grey[700]} fontSize={22} fontWeight="medium">
								Reference
							</Typography>

							<Box height={10} />

							<Typography>
								<Link to="/axios-example">See example here</Link>
							</Typography>

							<Typography>
								<Link to="https://axios-http.com/docs/post_example">
									Post Request Example
								</Link>
							</Typography>

							<Typography>
								<Link to="https://axios-http.com/docs/api_intro">
									API Reference
								</Link>
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Response
				</Typography>

				<Grid container columns={24} spacing={10}>
					<Grid xs={24} lg={12}>
						<Image src={AxiosResponseImage} width="95%" />
					</Grid>

					<Grid xs={24} lg={12}>
						<Stack>
							<Typography color={grey[700]} fontSize={22} fontWeight="medium">
								Reference
							</Typography>

							<Typography>
								<Link to="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">
									HTTP Status Code
								</Link>
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Stack>

			<Divider />

			<Typography>
				<a href="https://axios-http.com/">Official Axios Documentation</a>
			</Typography>
		</MainLayout>
	);
};

export default NetworkRequestPage;
