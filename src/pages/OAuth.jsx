import React from 'react';
import { Box, Grid, Stack } from '@mui/material';

import MainLayout from '../layouts/Main';
import { AtomImage, AtomText, AtomTitle } from '../components/atoms';
import { OrganismLoginBox } from '../components/organisms';

import GoogleLoginImage from '../assets/images/authentication/google-login.png';

const OAuthPage = () => {
	return (
		<MainLayout
			title="OAuth"
			description="OAuth 2.0, which stands for “Open Authorization”, is a standard designed to allow a website or application to access resources hosted by other web apps on behalf of a user."
			image="https://images.velog.io/images/flasharrow/post/1cc75a30-f9e8-4f33-87e0-28bbd1f53918/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg"
		>
			<Stack spacing={3}>
				<Stack>
					<AtomTitle>OAuth FLow</AtomTitle>
					<AtomText>Below is the example of OAuth flow done using Google OAuth</AtomText>
				</Stack>

				<Stack direction="row" justifyContent="center">
					<AtomImage
						src="https://ghost.hacksoft.io/content/images/2021/05/Google-OAuth-FE-flow@2x.png"
						width="50%"
					/>
				</Stack>

				<Stack direction="row" justifyContent="center">
					<OrganismLoginBox />
				</Stack>

				<Box height={50} />

				<Grid columns={24} container justifyContent="center" spacing={2}>
					<Grid item xs={24} md={12}>
						<AtomImage src={GoogleLoginImage} width="100%" />
					</Grid>
				</Grid>
			</Stack>
		</MainLayout>
	);
};

export default OAuthPage;
