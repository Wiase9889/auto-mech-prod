import React from 'react';

function Flags(props) {
	const title = props.title || "flags";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M62.7 23.8c-.3-.9-1.2-1.5-2.2-1.2-6 1.7-16.8 2.7-28.2 2.7-12 0-23-1.1-28.8-2.9-.9-.3-1.9.2-2.2 1.2-.2.8.1 1.5.7 2l4.7 12.9c.3.9 1.1 1.5 2 1.6H9c.8 0 1.5-.4 2-1l7.7-10.7c1.6.1 3.2.2 4.9.3l6.2 11.8c.4.8 1.3 1.3 2.1 1.3.9 0 1.7-.5 2.1-1.3l6.3-11.7c1.7-.1 3.4-.2 5-.3L53 39c.5.6 1.2 1 2 1h.3c.9-.1 1.6-.7 1.9-1.6l4.6-12.6c.7-.4 1.1-1.2.9-2zM9.3 35.3l-3.2-8.6c2.4.5 5.3.9 8.5 1.3l-5.3 7.3zM31.9 37l-4.3-8.2c1.5 0 3.1.1 4.7.1h4L31.9 37zm22.8-1.7L49.4 28c3.1-.3 5.9-.7 8.4-1.2l-3.1 8.5z"/>
	</g>
</svg>
	);
};

export default Flags;