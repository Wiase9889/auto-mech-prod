import React from 'react';

function Code(props) {
	const title = props.title || "code";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M18.6 16c.6-.7.6-1.8-.1-2.5-.7-.6-1.8-.6-2.5.1L2.4 28.9C.9 30.6.9 33.3 2.4 35L16 50.4c.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.4.7-.6.8-1.8.1-2.5L5 32.7c-.3-.4-.3-1.1 0-1.5L18.6 16z"/>
		<path d="M61.6 28.9L48 13.6c-.6-.7-1.7-.8-2.5-.1-.7.6-.8 1.7-.1 2.5L59 31.3c.3.4.3 1.1 0 1.5L45.4 48c-.6.7-.6 1.8.1 2.5.3.3.8.4 1.2.4.5 0 1-.2 1.3-.6L61.6 35c1.5-1.7 1.5-4.3 0-6.1z"/>
		<path d="M38 14c-.9-.3-1.9.2-2.2 1.1l-11 32.7c-.2.9.2 1.9 1.2 2.2.2.1.4.1.6.1.7 0 1.4-.5 1.7-1.2l11-32.7c.1-.9-.3-1.9-1.3-2.2z"/>
	</g>
</svg>
	);
};

export default Code;