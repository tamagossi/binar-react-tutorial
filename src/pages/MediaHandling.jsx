import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import ReactPlayer from 'react-player';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

import MainLayout from '../layouts/Main';
import { AtomCollapse, AtomImage, AtomText, AtomTitle } from '../components/atoms';

import ReactDropzoneInstallImage from '../assets/images/media-handling/react-dropzone-image.png';
import ReactDropzoneUsageImage from '../assets/images/media-handling/react-dropzone-usage.png';
import ReactDropzomePropsImage from '../assets/images/media-handling/react-dropzone-props.png';

import ReactPlayerInstallImage from '../assets/images/media-handling/react-player-install.png';
import ReactPlayerUsageImage from '../assets/images/media-handling/react-player-usage.png';

import ReactImageInstallImage from '../assets/images/media-handling/react-image-install.png';
import ReactImageUsageImage from '../assets/images/media-handling/react-image-usage.png';

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
						<AtomImage
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
						<AtomImage src={ReactDropzoneInstallImage} width="40%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Usage</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<AtomImage src={ReactDropzoneUsageImage} width="70%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Props</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<AtomImage src={ReactDropzomePropsImage} width="70%" />
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

			<AtomCollapse title="React Player">
				<AtomText>
					This library is tend to help you to play a video.{' '}
					<a href="https://react-dropzone-uploader.js.org/">Official Docs</a>
				</AtomText>

				<Box height={20} />

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Installation</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<AtomImage src={ReactPlayerInstallImage} width="40%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Usage</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<AtomImage src={ReactPlayerUsageImage} width="70%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Props</AtomTitle>

					<AtomText>
						You can see all available props in official docs.{' '}
						<a href="https://github.com/cookpete/react-player#props">Official Docs</a>
					</AtomText>
				</Stack>

				<Box height={20} />

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Example</AtomTitle>

					<Stack direction="row" justifyContent="center">
						<ReactPlayer url="https://www.youtube.com/watch?v=ux8GZAtCN-M&ab_channel=GabrielIglesias" />
					</Stack>
				</Stack>
			</AtomCollapse>

			<AtomCollapse title="React Modal Image">
				<AtomText>
					This library is tend to help you to show image and its all following features.{' '}
					<a href="https://www.npmjs.com/package/react-modal-image">Official Docs</a>
				</AtomText>

				<Box height={20} />

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Installation</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<AtomImage src={ReactImageInstallImage} width="40%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Usage</AtomTitle>

					<Stack direction="row" justifyContent="center" width="100%">
						<AtomImage src={ReactImageUsageImage} width="70%" />
					</Stack>
				</Stack>

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Props</AtomTitle>

					<AtomText>
						You can see all available props in official docs.{' '}
						<a href="https://www.npmjs.com/package/react-modal-image">Official Docs</a>
					</AtomText>
				</Stack>

				<Box height={20} />

				<Stack spacing={1}>
					<AtomTitle fontSize={18}>Example</AtomTitle>

					<Stack direction="row" justifyContent="center">
						<AtomImage src={ReactImageUsageImage} alt="Hello World!" />
					</Stack>
				</Stack>
			</AtomCollapse>
		</MainLayout>
	);
};

export default MediaHandlingPage;
