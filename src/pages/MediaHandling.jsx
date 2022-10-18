import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import { Image } from 'antd';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

import MainLayout from '../layouts/Main';
import { AtomCollapse, AtomText, AtomTitle } from '../components/atoms';

import ReactDropzoneInstallImage from '../assets/images/media-handling/react-dropzone-image.png';
import ReactDropzoneUsageImage from '../assets/images/media-handling/react-dropzone-usage.png';
import ReactDropzomePropsImage from '../assets/images/media-handling/react-dropzone-props.png';

const MediaHandlingPage = () => {
	const provideUploadParams = ({ meta }) => {
		return { url: 'https://httpbin.org/post' };
	};

	const logImageStatus = ({ meta, file }, status) => {
		console.log(status, meta, file);
	};

	const logResult = (files) => {
		console.log(files.map((f) => f.meta));
	};

	return (
		<MainLayout
			title="Media Handling"
			image="https://i.pinimg.com/736x/b3/65/fa/b365fad3d377e15fa799956f81a36d44.jpg"
		>
			<AtomCollapse title="React Dropzone Uploader">
				<Stack spacing={1}>
					<Stack direction="row" justifyContent="center" width="100%">
						<Image
							src="https://raw.githubusercontent.com/fortana-co/react-dropzone-uploader/master/rdu.gif"
							width="40%"
						/>
					</Stack>

					<Box height={10} />

					<AtomText>
						This library is tend to help you to upload file with a dropzone, you can
						easily replace <code>input</code> with type <code>file</code>.{' '}
						<a href="https://react-dropzone-uploader.js.org/">Official Docs</a>
					</AtomText>
				</Stack>

				<Box height={20} />

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Installation</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<Image src={ReactDropzoneInstallImage} width="40%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Usage</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<Image src={ReactDropzoneUsageImage} width="70%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Props</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<Image src={ReactDropzomePropsImage} width="70%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Example</AtomTitle>

					<Dropzone
						getUploadParams={provideUploadParams}
						onChangeStatus={logImageStatus}
						onSubmit={logResult}
						accept="image/*,audio/*,video/*"
					/>
				</Stack>
			</AtomCollapse>
		</MainLayout>
	);
};

export default MediaHandlingPage;
