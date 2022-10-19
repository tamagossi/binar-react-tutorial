import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import MainLayout from '../layouts/Main';
import { AtomImage, AtomText, AtomTitle } from '../components/atoms';
// import OrganismReduxTodo from '../components/organisms/ReduxTodo';

import ActionImage from '../assets/images/redux/action.png';
import InstallationImage from '../assets/images/redux/redux-install.png';
import ProjectStructureImage from '../assets/images/redux/project-structure.png';
import RootReducerImage from '../assets/images/redux/root-reducer.png';
import ReducerImage from '../assets/images/redux/reducer.png';
import StoreImage from '../assets/images/redux/store.png';
import StoreAppSetupImage from '../assets/images/redux/store-app-setup.png';
import TypeImage from '../assets/images/redux/type.png';
import UsageImage from '../assets/images/redux/redux-usage.png';

import ThunkActionImage from '../assets/images/redux/thunk-action.png';
import ThunkReducerImage from '../assets/images/redux/thunk-reducer.png';
import ThunkStoreImage from '../assets/images/redux/thunk-store.png';
import ThunkTypeImage from '../assets/images/redux/thunk-type.png';
import ThunkUsageImage from '../assets/images/redux/thunk-usage.png';

const StateManagementPage = () => {
	return (
		<MainLayout
			title="State Management"
			description="State-Management is the implementation of a Design Pattern, with the help of this design pattern we can synchronize the state of the application throughout all components of the application. This design pattern makes the implementation of services and handling of data coming from the database very easy."
			image="https://v2.vuejs.org/images/state.png"
		>
			<Stack spacing={1}>
				<AtomTitle>Why?</AtomTitle>

				<Stack direction="row" justifyContent="center" width="100%">
					<AtomImage
						src="https://christiankohler.net/static/e23cc4a6c42df7ff0e07afdc3080ace5/8e47a/PropDrilling.png"
						width="50%"
					/>
				</Stack>

				<AtomText>
					State Management library exist due to handle <strong>Props drilling</strong> in
					component-based application. Props drilling is a condition where a state passed
					to a nested children and becoming really hard to manage
				</AtomText>
			</Stack>

			<Stack spacing={1}>
				<AtomTitle>The difference</AtomTitle>

				<Stack direction="row" justifyContent="center" width="100%">
					<AtomImage
						src="https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg"
						width="50%"
					/>
				</Stack>

				<AtomText>
					With a state management, you have a centralized single source of truth state
					center that consumed by all compoenent which need that/those state(s)
				</AtomText>
			</Stack>

			<Stack spacing={1}>
				<AtomTitle>The State Management Library in React</AtomTitle>

				<AtomText>
					In React, you can find many state management libraries, but from those state
					managemenet library, we divide those libraries into 3 types:
				</AtomText>

				<Box height={20} />

				<Grid container columns={24} columnSpacing={4}>
					{[
						{
							title: 'Flux',
							reference: 'https://github.com/facebook/flux',
							libraries: ['Redux', 'Zustand'],
							description:
								'Is an application architecture developed by Facebook for utilizing a unidirectional data flow.',
						},
						{
							title: 'Proxy',
							reference: 'https://refactoring.guru/design-patterns/proxy',
							libraries: ['Mobx', 'Valtio'],
							description:
								'Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.',
						},
						{
							title: 'Atomic',
							reference: 'https://refactoring.guru/design-patterns/proxy',
							libraries: ['Recoil', 'Jotai'],
							description:
								'Atomic State Management implies using Atoms as a single source of the state. It’s like useState that can be shared between components. It took advantages from both component state and global store patterns into one approach.',
						},
					].map(({ title, reference, libraries, description }) => {
						return (
							<Grid item xs={24} md={8}>
								<Stack spacing={1}>
									<Typography
										color={grey[700]}
										fontSize={18}
										fontWeight="medium"
										textAlign="center"
									>
										{title}
									</Typography>

									<AtomText>
										{description} <a href={reference}>Reference</a>
									</AtomText>

									<AtomText>
										Here is the list of state management libraries which follows
										this pattern:
										<ul style={{ marginLeft: 15, marginTop: 15 }}>
											<strong>
												{libraries.map((library) => (
													<li>{library}</li>
												))}
											</strong>
										</ul>
									</AtomText>
								</Stack>
							</Grid>
						);
					})}
				</Grid>

				<AtomText>
					Well, other that those types, in React world, we also have another library such
					as <strong>XState</strong>. React also comes with its own State Management,
					which is <strong>Context API</strong>.{' '}
					<a href="https://github.com/olegrjumin/awesome-react-state-management">
						See the list here
					</a>
				</AtomText>
			</Stack>

			<Box height={20} />

			<Stack spacing={1}>
				<Typography color={grey[700]} fontSize={26} fontWeight="medium">
					Redux
				</Typography>

				<Grid container columns={24}>
					<Grid item xs={12}>
						<AtomImage
							src="https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif"
							width="100%"
						/>
					</Grid>

					<Grid item xs={12}>
						<AtomImage
							src="https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif"
							width="100%"
						/>
					</Grid>
				</Grid>

				<AtomTitle>Installation</AtomTitle>

				<AtomImage src={InstallationImage} width="50%" />
			</Stack>

			<Stack spacing={1}>
				<AtomTitle>Integrating Redux to your React component</AtomTitle>

				<AtomText>Here is the step-by-step on how to integrate Redux to React:</AtomText>

				<Grid container columns={24} spacing={2}>
					{[
						{
							label: '1. Initiate your project',
							image: ProjectStructureImage,
							imageSize: '50%',
						},
						{
							label: '2. Initiate your action types',
							image: TypeImage,
						},
						{
							label: '3. Initiate your action',
							image: ActionImage,
						},
						{
							label: '4. Initiate your reducer',
							image: ReducerImage,
						},
						{
							label: '5. Combine your reducer(s)',
							image: RootReducerImage,
						},
						{
							label: '6. Setup Redux',
							image: StoreImage,
						},
						{
							label: '7. Setup root store to root element',
							image: StoreAppSetupImage,
						},
						{
							label: '8. Use redux in your component',
							image: UsageImage,
						},
					].map(({ label, image, imageSize }) => {
						return (
							<Grid item xs={12}>
								<Stack spacing={1}>
									<AtomText>
										<strong>{label}</strong>
									</AtomText>

									<AtomImage src={image} width={imageSize || '100%'} />
								</Stack>
							</Grid>
						);
					})}

					<Grid item sx={12}></Grid>
				</Grid>

				{/* <OrganismReduxTodo /> */}
			</Stack>

			<Box height={40} />

			<Stack spacing={1}>
				<Typography color={grey[700]} fontSize={26} fontWeight="medium">
					Redux Thunk
				</Typography>

				<AtomText>
					Redux Thunk is middleware that allows you to return functions, rather than just
					actions, within Redux. This allows for delayed actions, including working with
					promises.
				</AtomText>

				<Typography color={grey[700]} fontSize={18} fontWeight="medium">
					Why
				</Typography>

				<AtomText>
					There are several reasons why we need redux-thunk:
					<strong>
						<ol style={{ marginLeft: 15, marginTop: 15 }}>
							<li>
								Data being used in more than one component is comes from API, hence
								instead of doing HTTP Request within component and become repeated.
								We put HTTP Request within redux actions
							</li>

							<li>No more repeated loading state</li>

							<li>Event recorded in redux debugger tool</li>
						</ol>
					</strong>
				</AtomText>

				<Typography color={grey[700]} fontSize={18} fontWeight="medium">
					Installation
				</Typography>

				<AtomText>
					For installation, you can visit{' '}
					<a href="https://github.com/reduxjs/redux-thunk">this website</a>
				</AtomText>

				<Box height={10} />

				<Typography color={grey[700]} fontSize={18} fontWeight="medium">
					So how we integrate redux with redux-thunk?
				</Typography>

				<Grid container columns={24} spacing={2}>
					{[
						{
							label: '1. Configure your store with Thunk',
							image: ThunkStoreImage,
						},
						{
							label: '2. Add type to your store types',
							image: ThunkTypeImage,
						},
						{
							label: '3. Setup your action with async function',
							image: ThunkActionImage,
						},
						{
							label: '4. Add new reducer based on type and action you have created',
							image: ThunkReducerImage,
						},
						{
							label: '5. Use in your component',
							image: ThunkUsageImage,
						},
					].map(({ label, image, imageSize }) => {
						return (
							<Grid item xs={12}>
								<Stack spacing={1}>
									<AtomText>
										<strong>{label}</strong>
									</AtomText>

									<AtomImage src={image} width={imageSize || '100%'} />
								</Stack>
							</Grid>
						);
					})}

					<Grid item sx={12}></Grid>
				</Grid>
			</Stack>
		</MainLayout>
	);
};

export default StateManagementPage;
