import React from 'react';

function Html5(props) {
	const title = props.title || "html5";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M45.7 14.6H20.9c-1.1 0-2.1.4-2.7 1.2l-.1.1c-.7.9-1 1.9-.8 2.9l1.5 8.6c.3 1.5 1.6 2.6 3.1 2.6h21l-2.2 10.7-8.3 3.5-8.3-3.3-.9-5.2c-.2-1-1.1-1.6-2-1.4-1 .2-1.6 1.1-1.4 2l1 5.4c.2 1.1.9 2 2 2.4l8.6 3.4c.4.2.8.2 1.2.2.4 0 .8-.1 1.2-.3l8.5-3.6c1-.4 1.7-1.3 1.9-2.3l2.3-11.3c.2-.9 0-1.9-.7-2.6-.6-.7-1.5-1.2-2.5-1.2h-21l-1.5-8.3H45.7c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M59.9 2.8C58.5 1.2 56.4.2 54.2.2H9.8c-2.2 0-4.2.9-5.7 2.6a7.6 7.6 0 0 0-1.8 6l5.3 44.3c.4 3.2 2.7 5.8 5.8 6.5l16.9 4c.6.1 1.2.2 1.7.2s1.2-.1 1.7-.2l16.9-4c3.1-.7 5.4-3.3 5.8-6.5l5.3-44.3c.3-2.2-.4-4.4-1.8-6zm-1.6 5.5L53 52.6c-.2 1.7-1.5 3.1-3.1 3.5l-16.9 4c-.6.1-1.3.1-1.9 0l-16.9-4c-1.7-.4-2.9-1.8-3.1-3.5L5.7 8.3C5.6 7.2 6 6 6.8 5.1c.8-.9 1.9-1.4 3.1-1.4h44.3c1.2 0 2.3.5 3.1 1.4.7.9 1.1 2.1 1 3.2z"/>
	</g>
</svg>
	);
};

export default Html5;