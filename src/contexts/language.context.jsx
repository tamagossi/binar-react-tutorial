// src/contexts/language.context.jsx
import React, { useMemo, useState, createContext } from 'react';

export const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('indonesia');

	const contextValues = useMemo(() => {
		return {
			setLanguage,
			language,
		};
	}, [language]);

	return <LanguageContext.Provider value={contextValues}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
