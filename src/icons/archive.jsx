import React from 'react';

function Archive(props) {
	const title = props.title || "archive";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M57.6 3.9H6.4c-2.9 0-5.2 2.3-5.2 5.2v6.3c0 2.9 2.3 5.2 5.2 5.2h.1v34.3c0 2.9 2.3 5.2 5.2 5.2h40.6c2.9 0 5.2-2.3 5.2-5.2V20.6h.1c2.9 0 5.2-2.3 5.2-5.2V9.1c0-2.9-2.4-5.2-5.2-5.2zm-3.6 51c0 .9-.8 1.7-1.7 1.7H11.7c-.9 0-1.7-.8-1.7-1.7V20.6h44v34.3zm5.3-39.5c0 .9-.8 1.7-1.7 1.7H6.4c-.9 0-1.7-.8-1.7-1.7V9.1c0-.9.8-1.7 1.7-1.7h51.1c.9 0 1.7.8 1.7 1.7v6.3z"/>
		<path d="M23.5 44.3h17.1c2.1 0 3.8-1.7 3.8-3.8V34c0-2.1-1.7-3.8-3.8-3.8H23.5c-2.1 0-3.8 1.7-3.8 3.8v6.5c0 2.1 1.7 3.8 3.8 3.8zM23.2 34c0-.1.1-.3.3-.3h17.1c.1 0 .3.1.3.3v6.5c0 .1-.1.3-.3.3H23.5c-.1 0-.3-.1-.3-.3V34z"/>
	</g>
</svg>
	);
};

export default Archive;