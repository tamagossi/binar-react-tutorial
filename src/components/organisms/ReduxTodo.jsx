import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid, Stack, Typography } from '@mui/material';

import TODO_ACTIONS from '../../redux/actions/todo.action';

const OrganismReduxTodo = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todo);

	useEffect(() => {
		(async () => {
			await getTodos();
		})();
	}, []);

	const getTodos = async () => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

			dispatch(TODO_ACTIONS.setTodo(response.data));
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
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
	);
};

export default OrganismReduxTodo;
