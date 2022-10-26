import { Image } from 'antd';
import React from 'react';

const AtomReactImage = ({ src, ...rest }) => {
	return <Image src={src} {...rest} />;
};

export default AtomReactImage;
