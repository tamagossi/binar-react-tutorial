import React from 'react';
import { Stack } from '@mui/system';

import MainLayout from '../layouts/Main';
import { AtomImage, AtomTitle } from '../components/atoms';

import WebStorageTypeImage from '../assets/images/storage/web-storage-types.png';
import WebStorageDifferenceImage from '../assets/images/storage/storage-difference.png';
import WebStorageMethodImage from '../assets/images/storage/storage-methods.png';
import GetItemExampleImage from '../assets/images/storage/get-item-example.png';
import SetItemExampleImage from '../assets/images/storage/set-item-example.png';
import CookieExampleImage from '../assets/images/storage/cookie-example.png';

const St = () => {
	return (
		<MainLayout
			title="Web Storage"
			description="Web storage is a storage within your browser that capable to save some data in JSON or a string that can be used by specific application"
			image="https://www.loginradius.com/blog/static/05c0a6d7a4539d8f04241b6ddf720a52/03979/blog-banner.png"
		>
			<Stack spacing={1}>
				<AtomTitle fontSize={18}>Type of different web storage</AtomTitle>

				<Stack justifyContent="center" alignItems="center">
					<AtomImage src={WebStorageTypeImage} alt="onClick" />

					<AtomImage src={WebStorageDifferenceImage} alt="onClick" />
				</Stack>
			</Stack>

			<Stack spacing={1}>
				<AtomTitle fontSize={18}>Storage method and usage</AtomTitle>

				<Stack justifyContent="center" alignItems="center" spacing={5}>
					<AtomImage src={WebStorageMethodImage} alt="onClick" />
					<AtomImage src={GetItemExampleImage} alt="onClick" />
					<AtomImage src={SetItemExampleImage} alt="onClick" />
					<AtomImage src={CookieExampleImage} alt="onClick" />
				</Stack>
			</Stack>
		</MainLayout>
	);
};

export default St;
