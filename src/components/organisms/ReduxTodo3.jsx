import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid, Stack, Typography } from '@mui/material';

import TODO_ACTIONS from '../../redux/actions/todo.action';

const OrganismReduxTodo = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todo);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			await getTodos();
		})();
	}, []);

	const getTodos = async () => {
		try {
			setLoading(true);
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

			dispatch(TODO_ACTIONS.setTodo(response.data));
			setLoading(false);
		} catch (error) {
			console.error(error.message);
		}
	};

	return loading ? (
		<div>I am still fething data</div>
	) : (
		<Stack mt={7} spacing={4}>
			<Grid container columns={24} spacing={4}>
				{todos.map((todo) => {
					return (
						<Grid item xs={24} md={12} lg={8}>
							<Card>
								<Typography p={2}>{todo.isComplete}</Typography>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Stack>
	);
};

export default OrganismReduxTodo;
