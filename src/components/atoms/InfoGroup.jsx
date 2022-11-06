import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const AtomInfoGroup = ({ label, content }) => {
	const [text, setText] = useState(content);

	return (
		<Stack>
			<Typography color={grey[500]} fontSize={14}>
				{label}
			</Typography>

			<Typography fontWeight="regular">{text}</Typography>

			<Button onClick={() => setText('Text baru')}>Change text</Button>
		</Stack>
	);
};

export default AtomInfoGroup;
