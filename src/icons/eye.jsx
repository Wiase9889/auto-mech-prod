import React from 'react';

function Eye(props) {
	const title = props.title || "eye";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 25c-3.9 0-7 3.2-7 7s3.2 7 7 7 7-3.2 7-7-3.1-7-7-7zm0 10.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
		<path d="M62.4 30.8c-6.6-10.4-18-16.6-30.4-16.6-12.4 0-23.8 6.2-30.4 16.6-.4.7-.4 1.6 0 2.3 6.6 10.4 18 16.6 30.4 16.6 12.4 0 23.8-6.2 30.4-16.6.5-.7.5-1.6 0-2.3zM32 46.2c-10.9 0-21-5.3-27-14.3 6-8.9 16.1-14.2 27-14.2 10.9 0 21 5.3 27 14.2-6 9-16.1 14.3-27 14.3z"/>
	</g>
</svg>
	);
};

export default Eye;