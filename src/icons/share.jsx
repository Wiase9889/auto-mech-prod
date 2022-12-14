import React from 'react';

function Share(props) {
	const title = props.title || "share";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M29.4 41.7c1 0 1.8-.8 1.8-1.8V23.8c0-6.1 5-11.1 11.1-11.1h14.6l-6.4 4.8c-.8.6-.9 1.7-.4 2.4.3.5.9.7 1.4.7.4 0 .7-.1 1-.3l8.6-6.5c1-.7 1.6-1.8 1.5-2.9 0-1.1-.6-2.2-1.6-2.9l-8.6-6.3c-.6-.7-1.7-.5-2.3.3-.6.8-.4 1.9.4 2.4L57 9.2H42.3c-8.1 0-14.6 6.6-14.6 14.6v16.1c-.1 1 .7 1.8 1.7 1.8z"/>
		<path d="M61 38.2c-1 0-1.8.8-1.8 1.8v15.5c0 2.1-1.7 3.8-3.8 3.8H8.6c-2.1 0-3.8-1.7-3.8-3.8V39.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v15.5c0 4 3.3 7.3 7.3 7.3h46.8c4 0 7.3-3.3 7.3-7.3V39.9c.2-1-.6-1.7-1.6-1.7z"/>
	</g>
</svg>
	);
};

export default Share;