import { useContext } from 'react';

import { LanguageContext } from '../contexts/language.context';

const useLanguage = () => {
	const { language, setLanguage } = useContext(LanguageContext);

	const toggleLanguage = () => {
		const newLang = language === 'indonesia' ? 'english' : 'indonesia';

		setLanguage(newLang);
	};

	return { language, toggleLanguage };
};

export default useLanguage;
