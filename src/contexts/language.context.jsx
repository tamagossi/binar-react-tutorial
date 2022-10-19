// src/contexts/language.context.jsx
import React, { useMemo, useState, createContext } from 'react';

export const LanguageContext = createContext({});

const LanguageProvider = (props) => {
	const [language, setLanguage] = useState('indonesia');

	const contextValues = { setLanguage, language };

	return (
		<LanguageContext.Provider value={contextValues}>{props.children}</LanguageContext.Provider>
	);
};

export default LanguageProvider;
