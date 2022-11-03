import React from 'react';
import { Divider, Stack } from '@mui/material';

import MainLayout from '../layouts/Main';
import { AtomImage, AtomText, AtomTitle } from '../components/atoms';

import JestInstallImage from '../assets/images/jest/jest-install.png';
import JestMethodImage from '../assets/images/jest/jest-method.png';

const TestingPage = () => {
	return (
		<MainLayout
			title="Software Testing"
			description="Software Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is Defect free. It involves execution of software/system components using manual or automated tools to evaluate one or more properties of interest. The purpose of software testing is to identify errors, gaps or missing requirements in contrast to actual requirements."
			image="https://tsh.io/wp-content/uploads/2019/04/jest-snapshot-testing-pros-cons.jpg"
		>
			<Stack spacing={1}>
				<AtomTitle>Type of software testing</AtomTitle>

				<Stack justifyContent="center" alignItems="center">
					<AtomImage
						src="https://ehikioya.azureedge.net/wp-content/uploads/hm_bbpui/86828/fh2aspgg9au0icjnuf8d9lvhwccrv977.png"
						alt="testing type"
						width="70%"
					/>
				</Stack>

				<AtomTitle fontSize={18}>Unit Testing</AtomTitle>

				<AtomText>
					Unit Testing is a type of software testing where individual units or components
					of a software are tested. The purpose is to validate that each unit of the
					software code performs as expected. Unit Testing is done during the development
					(coding phase) of an application by the developers. Unit Tests isolate a section
					of code and verify its correctness. A unit may be an individual function,
					method, procedure, module, or object. In SDLC, STLC, V Model, Unit testing is
					first level of testing done before integration testing. Unit testing is a
					WhiteBox testing technique that is usually performed by the developer. Though,
					in a practical world due to time crunch or reluctance of developers to tests, QA
					engineers also do unit testing.{' '}
					<a href="https://www.guru99.com/unit-testing-guide.html">Reference</a>
				</AtomText>
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<AtomTitle>Testing Driven Development</AtomTitle>

				<Stack justifyContent="center" alignItems="center">
					<AtomImage
						src="https://miro.medium.com/proxy/1*ieVWcSsJmeBbZFo6a_dL5g.png"
						alt="Jest"
						width="40%"
					/>
				</Stack>

				<AtomText>
					Test Driven Development (TDD) is software development approach in which test
					cases are developed to specify and validate what the code will do. In simple
					terms, test cases for each functionality are created and tested first and if the
					test fails then the new code is written in order to pass the test and making
					code simple and bug-free.{' '}
					<a href="https://www.guru99.com/test-driven-development.html">Reference</a>
				</AtomText>
			</Stack>

			<Divider />

			<Stack spacing={2}>
				<AtomTitle>Javascript Testing Tools</AtomTitle>

				<Stack justifyContent="center" alignItems="center">
					<AtomImage
						src="https://miro.medium.com/max/796/1*VxBKV4bcUJ4M7WCuCNmHWw.png"
						alt="Jest"
						width="40%"
					/>
				</Stack>

				<AtomText>
					Jest is a delightful JavaScript Testing Framework with a focus on simplicity..{' '}
					<a href="https://jestjs.io/">Reference</a>
				</AtomText>

				<AtomTitle fontSize={18}>Installation</AtomTitle>

				<Stack justifyContent="center" alignItems="center">
					<AtomImage src={JestInstallImage} alt="Jest" width="40%" />
				</Stack>

				<AtomTitle fontSize={18}>Jest Methods</AtomTitle>

				<Stack justifyContent="center" alignItems="center" spacing={2}>
					<AtomImage src={JestMethodImage} alt="Jest" width="40%" />

					<a href="https://github.com/sapegin/jest-cheat-sheet">Reference</a>
				</Stack>
			</Stack>
		</MainLayout>
	);
};

export default TestingPage;
