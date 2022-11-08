import axios from 'axios';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

import { EmailOutlined, PasswordOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, InputAdornment, Stack, TextField, Typography } from '@mui/material';

const OrganismLoginBox = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [cars, setCars] = useState([]);

	const authenticate = async (event) => {
		event.preventDefault();
		const {
			email: { value: email },
			password: { value: password },
		} = event.target.elements;

		const { data: auth } = await axios.post(
			'https://bootcamp-rent-cars.herokuapp.com/customer/auth/login',
			{ email, password }
		);

		localStorage.setItem('auth', JSON.stringify(auth));
		navigate('/dashboard');
	};

	const getCars = async () => {
		try {
			const token = JSON.parse(localStorage.getItem('auth')).token;

			const { data } = await axios.get(
				`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?page=1&limit=100`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			setCars(data);
		} catch (error) {
			console.error(error.message);
		}
	};

	console.log(cars);

	return (
		<Card sx={{ padding: 5, width: 720 }}>
			<Stack spacing={5}>
				<Stack direction="row" justifyContent="center">
					<Typography fontWeight={500}>Login with Email & Password</Typography>
				</Stack>

				<form onSubmit={authenticate}>
					<Stack spacing={2}>
						<TextField
							label="Email"
							name="email"
							variant="outlined"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<EmailOutlined />
									</InputAdornment>
								),
							}}
						/>

						<TextField
							label="Password"
							name="password"
							variant="outlined"
							type={showPassword ? 'text' : 'password'}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PasswordOutlined />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment
										position="start"
										sx={{ cursor: 'pointer' }}
										onClick={() => setShowPassword((prev) => !prev)}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</InputAdornment>
								),
							}}
						/>

						<Button type="submit" variant="contained">
							Login
						</Button>
					</Stack>
				</form>

				<Stack direction="row" justifyContent="center">
					<Stack>
						<Typography fontWeight={500}>or</Typography>
					</Stack>
				</Stack>

				<Stack direction="row" justifyContent="center">
					<GoogleLogin
						accessType="online"
						disabled={false}
						clientId="558112081248-fvjcb9o44tbbf32ofij1ueqrj3bsb0em.apps.googleusercontent.com"
						onSuccess={(response) => console.log(response)}
						onFailure={(response) => console.log(response)}
						cookiePolicy="single_host_origin"
						buttonText="Login with Google"
					/>
				</Stack>
			</Stack>
		</Card>
	);
};

export default OrganismLoginBox;
