import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CircularProgress, Grid, Stack, Typography } from '@mui/material';

import TODO_ACTIONS from '../../redux/actions/todo.action';

const OrganismReduxTodo = () => {
	const dispatch = useDispatch();
	const { todos, fetchingTodoErrorMessage, isFetchingTodoError, isLoadingTodo } = useSelector(
		(state) => state.todo
	);

	useEffect(() => {
		(async () => {
			dispatch(TODO_ACTIONS.setTodo());
		})();
	}, []);

	if (isLoadingTodo) {
		<Stack height="75vh" width="75vw" justifyContent="center" alignItems="center">
			<CircularProgress />
		</Stack>;
	}

	if (isFetchingTodoError) {
		return (
			<Stack mt={7} spacing={4}>
				<Typography>{fetchingTodoErrorMessage}</Typography>
			</Stack>
		);
	}

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
