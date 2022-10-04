import React from 'react';
import { Stack } from '@mui/system';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';

const CarDetailPage = () => {
	const { id } = useParams();
	let [searchParams, setSearchParams] = useSearchParams();

	const getUrlQuery = (key) => {
		console.log(searchParams.get(key));
	};

	return (
		<Stack p={10} alignItems="center" spacing={6}>
			<h1>Hallo I am id of car: {id}</h1>

			<Stack direction="row" spacing={2}>
				<Button variant="contained" onClick={() => getUrlQuery('query')}>
					Get params by the key of query
				</Button>

				<Button
					variant="contained"
					onClick={() => setSearchParams({ query: 'Another query' })}
				>
					Set new search params
				</Button>

				<Link to="/routing?firstVisit=false">
					<Button>Go to routing page</Button>
				</Link>
			</Stack>
		</Stack>
	);
};

export default CarDetailPage;
