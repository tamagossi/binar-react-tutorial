import React, { Component } from 'react';
import axios from 'axios';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';

export default class AxiosExampleRCC extends Component {
	constructor() {
		super();

		this.state = {
			todos: [],
		};
	}

	getTodoList = async () => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

			this.setState({
				todos: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	render() {
		return (
			<Box p={5} px={20}>
				<Stack mt={7} spacing={4}>
					<Grid container columns={24} spacing={4}>
						{this.state.todos.map((todo) => {
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
	}
}
