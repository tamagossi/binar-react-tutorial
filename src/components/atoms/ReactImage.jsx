import React from 'react';
import Image from 'react-modal-image';

const AtomReactImage = ({ src, ...rest }) => {
	return <Image small={src} large={src} />;
};

export default AtomReactImage;
