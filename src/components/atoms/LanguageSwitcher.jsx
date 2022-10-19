import React from 'react';
import { Stack, Switch, Typography } from '@mui/material';

import useLanguage from '../../hooks/useLanguage';

const AtomLanguageSwitcher = () => {
	const { language, toggleLanguage } = useLanguage();

	return (
		<Stack direction="row" alignItems="center" justifyContent="center">
			<Switch color="primary" onChange={toggleLanguage} />

			<Typography>{language === 'indonesia' ? 'ID' : 'EN'}</Typography>
		</Stack>
	);
};

export default AtomLanguageSwitcher;
