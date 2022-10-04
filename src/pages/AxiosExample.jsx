import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { KeyboardBackspaceOutlined } from '@mui/icons-material';
import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AxiosExamplePage = () => {
	const navigate = useNavigate();
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		(async () => {
			getTodoList();
		})();
	}, []);

	const getTodoList = async () => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

			console.log(response);

			setTodos(response.data);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<Box p={5} px={20}>
			<Stack alignItems="start" spacing={2}>
				<Button
					startIcon={<KeyboardBackspaceOutlined />}
					onClick={() => navigate(-1)}
					variant="text"
					type="button"
					color="secondary"
				>
					Back
				</Button>
			</Stack>

			<Stack mt={7} spacing={4}>
				<Grid container columns={24} spacing={4}>
					{todos.map((todo) => {
						return (
							<Grid item xs={24} md={12} lg={8}>
								<Card>
									<Typography p={2}>{todo.title}</Typography>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Stack>
		</Box>
	);
};

export default AxiosExamplePage;
