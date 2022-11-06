import React from 'react';
import { render, screen } from '@testing-library/react';

import AtomInfoGroup from '../InfoGroup';

describe('Atom Info Group component:', () => {
	it('should render title  as props passed', () => {
		render(<AtomInfoGroup label="Title mock" content="content mock" />);

		expect(screen.getByText('Title mock')).toBeInTheDocument();
	});

	it('should render  content as props passed', () => {
		render(<AtomInfoGroup label="Title mock" content="content mock" />);

		expect(screen.getByText('content mock')).toBeInTheDocument();
	});
});
