import React from 'react';

function HeartMonitor(props) {
	const title = props.title || "heart monitor";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M42.5 17.1h-.3L39.5 4.8c-.5-2.1-2.3-3.5-4.4-3.5h-6.2c-2.1 0-3.9 1.4-4.4 3.5l-2.8 12.3h-.2c-3.2 0-5.8 2.6-5.8 5.8v18.4c0 3.2 2.6 5.8 5.8 5.8h.2l2.8 12.3c.5 2.1 2.3 3.5 4.4 3.5h6.2c2.1 0 3.9-1.4 4.4-3.5l2.8-12.3h.3c3.2 0 5.8-2.6 5.8-5.8V22.8c-.1-3.2-2.7-5.7-5.9-5.7zM27.9 5.5c.1-.5.5-.8 1-.8h6.2c.5 0 .9.3 1 .8L38.7 17H25.3l2.6-11.5zm-6.4 15.1h21c1.2 0 2.3 1 2.3 2.3v9.8L36.6 28c-.5-.3-1.2-.3-1.7 0l-8.1 4.7-7.5-4.3v-5.5c0-1.3 1-2.3 2.2-2.3zm14.6 37.9c-.1.5-.5.8-1 .8h-6.2c-.5 0-.9-.3-1-.8L25.3 47h13.3l-2.5 11.5zm6.4-15.1h-21c-1.2 0-2.3-1-2.3-2.3v-8.9l6.6 3.8c.5.3 1.2.3 1.7 0l8.1-4.7 9 5.2V41c.2 1.4-.9 2.4-2.1 2.4z"/>
	</g>
</svg>
	);
};

export default HeartMonitor;