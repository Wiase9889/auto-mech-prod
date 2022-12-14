import React from 'react';

function PencilAlt(props) {
	const title = props.title || "pencil alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M62.7 11.2c0-.7-.3-1.3-.8-1.8l-3.7-3.7c-1.1-1.1-2.2-2.2-3.3-3.4-.4-.5-1-.9-1.6-1-.7-.1-1.5.1-2.1.6L44 9.1H8.7c-4.1 0-7.4 3.3-7.4 7.4v38.9c0 4.1 3.3 7.4 7.4 7.4h38.9c4.1 0 7.4-3.3 7.4-7.4V19.9l6.9-6.9c.5-.5.8-1.2.8-1.8zM33.3 36.6c-.1.1-.3.2-.4.3l-8.6 2.9 2.8-8.6c.1-.2.1-.3.3-.4l19-19 6 5.9-19.1 18.9zm18.2 18.8c0 2.1-1.7 3.9-3.9 3.9H8.7c-2.1 0-3.9-1.7-3.9-3.9v-39c0-2.1 1.7-3.9 3.9-3.9h31.9L24.9 28.2c-.5.5-.9 1.1-1.1 1.8L20 41.6c-.2.6-.1 1.2.2 1.7.3.4.7.8 1.6.8h.3L34 40.2c.7-.2 1.3-.6 1.8-1.1l15.8-15.7v32zm3.3-40.3l-6-5.9 4-4 2.9 2.9c1 1 2 2 3 3.1l-3.9 3.9z"/>
	</g>
</svg>
	);
};

export default PencilAlt;