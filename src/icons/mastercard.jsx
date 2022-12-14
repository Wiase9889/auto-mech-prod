import React from 'react';

function Mastercard(props) {
	const title = props.title || "mastercard";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M56.1 12.5H7.9c-4.2 0-7.6 3.4-7.6 7.6v23.8c0 4.2 3.4 7.6 7.6 7.6h48.3c4.2 0 7.6-3.4 7.6-7.6V20.1c0-4.2-3.5-7.6-7.7-7.6zm4.2 31.4c0 2.3-1.8 4.1-4.1 4.1H7.9c-2.3 0-4.1-1.8-4.1-4.1V20.1c0-2.3 1.9-4.1 4.1-4.1h48.3c2.3 0 4.1 1.9 4.1 4.1v23.8z"/>
		<path d="M36.9 22.4c-2 0-3.9.6-5.4 1.7-1.4-1-3.1-1.4-4.9-1.4-5.1 0-9.3 4.2-9.3 9.3s4.2 9.3 9.3 9.3c1.7 0 3.4-.5 4.9-1.4 1.6 1.1 3.4 1.7 5.4 1.7 5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.6-9.6zm.2 16.8c-1.3 0-2.5-.4-3.5-.9 1.5-1.7 2.5-3.8 2.5-6.3-.1-2.5-1-4.7-2.5-6.3 1.1-.6 2.2-.9 3.5-.9 3.9 0 7.2 3.2 7.2 7.2-.1 4-3.3 7.2-7.2 7.2z"/>
	</g>
</svg>
	);
};

export default Mastercard;