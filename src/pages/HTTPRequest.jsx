import React from 'react';
import { Grid, Typography, Divider, Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import MainLayout from '../layouts/Main';
import { AtomImage, AtomText, AtomTitle } from '../components/atoms';

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
				<AtomTitle>A Brief</AtomTitle>

				<Stack direction="row" justifyContent="center" width="100%">
					<AtomImage
						src="https://bacabagus101.files.wordpress.com/2018/12/download-5.png"
						width="50%"
					/>
				</Stack>

				<AtomText>There 4 basic HTTP request method that commonly used, which are</AtomText>

				<ul>
					{[
						'CREATE | represented by POST',
						'READ | represented by GET',
						'UPDATE | represented by PUT',
						'DELETE | represented by DELETE',
					].map((method) => {
						return (
							<li>
								<AtomText>{method}</AtomText>
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
				<AtomTitle>Native javascript fetch</AtomTitle>
				<AtomText>
					Javascript has its own fetch function, as you can see the example below:
				</AtomText>

				<Stack direction="row" justifyContent="center">
					<AtomImage src={NativeFetchImage} width="50%" />
				</Stack>
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<AtomTitle>Axios</AtomTitle>

				<AtomText>
					Axios is a promise-based HTTP Client for node.js and the browser. It is
					isomorphic (= it can run in the browser and nodejs with the same codebase). On
					the server-side it uses the native node.js http module, while on the client
					(browser) it uses XMLHttpRequests.
				</AtomText>

				<AtomTitle>Motivation</AtomTitle>

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
								<AtomText>{method}</AtomText>
							</li>
						);
					})}
				</ul>

				<AtomTitle>Installation</AtomTitle>

				<AtomImage src={InstallationImage} width="50%" />
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<AtomTitle>Basic Usage</AtomTitle>

				<Grid container columns={24} spacing={10}>
					<Grid xs={24} lg={12}>
						<AtomImage src={AxiosBasicUsageImage} width="95%" />
					</Grid>

					<Grid xs={24} lg={12}>
						<Stack>
							<AtomTitle>Reference</AtomTitle>

							<Box height={10} />

							<Typography>
								<Link to="/axios-example">See example here</Link>
							</Typography>

							<Typography>
								<a href="https://axios-http.com/docs/post_example">
									Post Request Example
								</a>
							</Typography>

							<Typography>
								<a href="https://axios-http.com/docs/api_intro">API Reference</a>
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<AtomTitle>Response</AtomTitle>

				<Grid container columns={24} spacing={10}>
					<Grid xs={24} lg={12}>
						<AtomImage src={AxiosResponseImage} width="95%" />
					</Grid>

					<Grid xs={24} lg={12}>
						<Stack>
							<AtomTitle>Reference</AtomTitle>

							<Typography>
								<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">
									HTTP Status Code
								</a>
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
