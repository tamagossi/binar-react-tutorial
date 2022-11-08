import React from 'react';
import { Box, Divider, Grid, Stack } from '@mui/material';

import MainLayout from '../layouts/Main';
import { AtomImage, AtomText, AtomTitle } from '../components/atoms';
import { OrganismLoginBox } from '../components/organisms';

import AuthenticationFlowImage from '../assets/images/authentication/authentication-flow.png';
import LoginImage from '../assets/images/authentication/login.png';
import BearerImage from '../assets/images/authentication/bearer-token.png';

const AuthenticationPage = () => {
	return (
		<MainLayout
			title="Authentication & Authorization"
			description="Authentication and authorization is a process to validate user, these methods will prevent you a security layer when someone want to access your site or your data. "
			image="https://www.ssl2buy.com/wiki/wp-content/uploads/2019/04/authentication-vs-authorization.jpg"
		>
			<Stack spacing={3}>
				<Stack>
					<AtomTitle>Authorization</AtomTitle>
					<AtomText>
						Authorization is the process of giving someone the ability to access a
						resource.
					</AtomText>
				</Stack>

				<Stack>
					<AtomTitle>Authentication</AtomTitle>
					<AtomText>
						Authentication is a term that refers to the process of proving that some
						fact or some document is genuine. In computer science, this term is
						typically associated with proving a user’s identity. Usually, a user proves
						their identity by providing their credentials, that is, an agreed piece of
						information shared between the user and the system.
						<br />
						<br />
						<strong>
							Mostly, authentication process is done by transferring information
							through the string called token
						</strong>
						. Here is the diagram of the process when Front End application and Back End
						application make an agreement of authentication
					</AtomText>
				</Stack>

				<Stack direction="row" justifyContent="center">
					<AtomImage src={AuthenticationFlowImage} width="50%" />
				</Stack>

				<Stack direction="row" justifyContent="center">
					<OrganismLoginBox />
				</Stack>

				<Box height={50} />

				<Grid columns={24} container justifyContent="center" spacing={2}>
					<Grid item xs={24} md={12}>
						<AtomImage src={LoginImage} width="100%" />
					</Grid>
					<Grid item xs={24} md={12}>
						<AtomImage src={BearerImage} width="100%" />
					</Grid>
				</Grid>
			</Stack>
		</MainLayout>
	);
};

export default AuthenticationPage;
