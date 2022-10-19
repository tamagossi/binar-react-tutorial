import React, { useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Stack } from '@mui/system';

import MainLayout from '../layouts/Main';
import { AtomImage, AtomText, AtomTitle } from '../components/atoms';

import onClickImage from '../assets/images/events/onClick.png';
import onChangeImage from '../assets/images/events/onChange.png';
import onSubmitImage from '../assets/images/events/onSubmit.png';

const EventPage = () => {
	const [value, setValue] = useState('');

	const getAllFormValues = (event) => {
		event.preventDefault();
		const data = new FormData(event.target);

		alert(`First Name: ${data.get('first_name')}`);
		alert(`Last Name: ${data.get('last_name')}`);
	};

	const events = [
		{
			name: 'onClick',
			image: onClickImage,
			children: (
				<Button variant="contained" onClick={() => alert('onClick example')}>
					onClick event example
				</Button>
			),
		},
		{
			name: 'onChange',
			image: onChangeImage,
			children: (
				<Stack alignItems="center" spacing={1}>
					<Stack direction="row" spacing={3} justifyContent="center">
						<Typography>input value: {value}</Typography>
					</Stack>

					<TextField
						name="full_name"
						onChange={(event) => setValue(event.target.value)}
					/>
				</Stack>
			),
		},
		{
			name: 'onSubmit',
			image: onSubmitImage,
			children: (
				<form onSubmit={getAllFormValues}>
					<Stack alignItems="center" spacing={1} direction="row">
						<TextField name="first_name" label="First Name" />
						<TextField name="last_name" label="Last Name" />
						<Button type="submit">Submit</Button>
					</Stack>
				</form>
			),
		},
	];

	return (
		<MainLayout
			title="React Event"
			description="An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events."
			image="https://res.cloudinary.com/practicaldev/image/fetch/s--bZXXrJwH--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8uhg90p5p1x2zznc7dve.png"
		>
			<Stack spacing={1}>
				<AtomTitle>Background</AtomTitle>

				<AtomText>We need DOM event to make the web interactive</AtomText>
			</Stack>

			<Grid container columns={24} spacing={5}>
				{events.map(({ name, image, children }) => {
					return (
						<Grid item xs={26} md={12}>
							<Card sx={{ height: 460, overflowY: 'auto' }}>
								<Stack alignItems="center" mb={5} spacing={2}>
									<AtomImage
										src={image}
										alt="onClick"
										width="100%"
										style={{
											backgroundSize: 'cover',
											backgroundPosition: 'center',
										}}
									/>

									<Stack spacing={3} alignItems="center" width="100%">
										<Typography color={grey[600]} fontSize={20}>
											{name}
										</Typography>

										{children}
									</Stack>
								</Stack>
							</Card>
						</Grid>
					);
				})}
			</Grid>

			<Card sx={{ background: grey[100] }}>
				<Stack width="100%" spacing={1} p={3}>
					<AtomTitle>💡 Important !!</AtomTitle>

					<Typography color={grey[500]} fontSize={16}>
						All event in react are passing <code>event</code> params to function we
						provide
					</Typography>

					<Typography>
						<a href="https://reactjs.org/docs/events.html">
							All available react event listed here
						</a>
					</Typography>
				</Stack>
			</Card>
		</MainLayout>
	);
};

export default EventPage;
