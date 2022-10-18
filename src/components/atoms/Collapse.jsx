import React, { useState } from 'react';
import { Card, Collapse, Stack } from '@mui/material';
import AtomTitle from './Title';
import { grey } from '@mui/material/colors';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const AtomCollapse = ({ children, title }) => {
	const [show, setShow] = useState(true);

	return (
		<>
			<Card>
				<Stack
					direction="row"
					justifyContent="space-between"
					p={2}
					onClick={() => setShow((prev) => !prev)}
					style={{ cursor: 'pointer' }}
				>
					<AtomTitle fontSize={20}>{title}</AtomTitle>

					{!show ? <ExpandMore /> : <ExpandLess />}
				</Stack>

				<Collapse
					in={show}
					sx={{
						border: `1px solid ${grey[300]}`,
						padding: 2,
						display: show ? 'block' : 'none',
					}}
				>
					{children}
				</Collapse>
			</Card>
		</>
	);
};

export default AtomCollapse;
