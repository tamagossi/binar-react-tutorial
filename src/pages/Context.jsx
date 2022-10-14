import { Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Image } from 'antd';
import React from 'react';

import MainLayout from '../layouts/Main';
import { AtomLanguageSwitcher } from '../components/atoms';

import ContextHooksImage from '../assets/images/context/context-hooks.png';
import ContextRegisterImage from '../assets/images/context/context-register.png';
import ContextSettingImage from '../assets/images/context/context-setting.png';
import ContextUsageImage from '../assets/images/context/context-usage.png';

const ContextPage = () => {
	return (
		<MainLayout
			title="Context API"
			description="The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to `prop drilling` or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux."
			image="https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png"
		>
			<Stack spacing={1}>
				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Integrating Context API to your React component
				</Typography>

				<Typography color={grey[500]} fontSize={16}>
					Here is the step-by-step on how to integrate Redux to React, First thing first,
					you need to provide <strong>2 folders</strong> within{' '}
					<strong>src folder</strong>, <strong>contexts</strong> folder and{' '}
					<strong>hooks</strong> folder.
				</Typography>

				<Grid container columns={24} spacing={2}>
					{[
						{
							label: '1. Set up your context',
							image: ContextSettingImage,
						},
						{
							label: '2. Create custom hooks to consume your context',
							image: ContextHooksImage,
						},
						{
							label: '3. Register your context',
							image: ContextRegisterImage,
						},
						{
							label: '4. Use your context in your component',
							image: ContextUsageImage,
						},
					].map(({ label, image, imageSize }) => {
						return (
							<Grid item xs={12}>
								<Stack spacing={1}>
									<Typography color={grey[500]} fontSize={16}>
										<strong>{label}</strong>
									</Typography>

									<Image src={image} width={imageSize || '100%'} />
								</Stack>
							</Grid>
						);
					})}

					<Grid item sx={12}></Grid>
				</Grid>

				<Typography color={grey[700]} fontSize={22} fontWeight="medium">
					Context Example:
				</Typography>

				<AtomLanguageSwitcher />
			</Stack>
		</MainLayout>
	);
};

export default ContextPage;
