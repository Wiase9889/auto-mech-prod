import React from 'react';

function Stamp(props) {
	const title = props.title || "stamp";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M46.5 35.7h-8.2l1.3-25.9c.1-2.3-.7-4.5-2.3-6.2C35.9 2.1 34 1.3 32 1.3s-3.9.8-5.3 2.3c-1.6 1.6-2.4 3.9-2.3 6.2l1.3 25.9h-8.1c-6.1 0-11 5.4-11 12v4.8c0 1.3 1 2.4 2.3 2.4h.3v3.5c0 2.4 2 4.4 4.4 4.4h36.9c2.4 0 4.4-2 4.4-4.4v-3.5h.3c1.3 0 2.3-1.1 2.3-2.4v-4.8c0-6.6-5-12-11-12zm-18.7-26c-.1-1.4.4-2.7 1.3-3.7 1.5-1.6 4.1-1.6 5.6 0 .9.9 1.4 2.2 1.3 3.6l-1.3 26.1h-5.6l-1.3-26zM10 47.7c0-4.7 3.4-8.5 7.5-8.5H46.4c4.1 0 7.5 3.8 7.5 8.5v3.7H10v-3.7zm41.3 10.7c0 .5-.4.9-.9.9H13.6c-.5 0-.9-.4-.9-.9v-3.5h38.7v3.5z"/>
	</g>
</svg>
	);
};

export default Stamp;