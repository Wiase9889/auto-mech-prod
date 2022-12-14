import React from 'react';

function Weight(props) {
	const title = props.title || "weight";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M54.4 1.3H9.6C6.5 1.3 3.9 3.8 3.9 7v50c0 3.2 2.6 5.8 5.8 5.8h44.7c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.8-5.7zM56.6 57c0 1.2-1 2.3-2.3 2.3H9.6c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h44.7c1.2 0 2.3 1 2.3 2.3v50z"/>
		<path d="M31.9 13.9c-7.6 0-14 6.3-15 14.6-.1.7.1 1.4.6 1.9.4.5 1 .7 1.7.7h25.5c.6 0 1.2-.3 1.7-.7.4-.5.6-1.2.6-1.8-1.1-8.4-7.5-14.7-15.1-14.7zm1.4 13.7L32 23.8c-.3-.9-1.3-1.4-2.2-1.1-.9.3-1.4 1.3-1.1 2.2l.9 2.7h-9c1.2-5.9 5.9-10.2 11.3-10.2S42 21.7 43.2 27.6h-9.9z"/>
	</g>
</svg>
	);
};

export default Weight;