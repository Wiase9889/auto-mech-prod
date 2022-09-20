import React from 'react';

function Anchor(props) {
	const title = props.title || "anchor";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M54.3 46.3l-4.8-3.8c-1-.8-2.5-.8-3.6 0l-4.7 3.7c-.8.6-.9 1.7-.3 2.5.6.8 1.7.9 2.5.3l2.5-2c-.4 6.3-5.7 11.4-12.3 12.2V25.3h6.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.3v-4.8c3.5-.8 6.2-4 6.2-7.7 0-4.4-3.6-7.9-7.9-7.9S24 4.9 24 9.2c0 3.8 2.6 6.9 6.2 7.7v4.8h-6.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.3v33.9c-6.7-.8-11.9-5.9-12.3-12.2l2.7 2.2c.3.3.7.4 1.1.4.5 0 1-.2 1.4-.7.6-.8.5-1.9-.3-2.5L18 42.6c-1-.8-2.5-.8-3.6 0l-4.7 3.7c-.8.6-.9 1.7-.3 2.5.6.8 1.7.9 2.5.3l2.4-1.9c.5 8.7 8.2 15.7 17.6 15.7 9.4 0 17.1-7 17.6-15.7l2.6 2.1c.3.3.7.4 1.1.4.5 0 1-.2 1.4-.7.6-1 .4-2.1-.3-2.7zM27.4 9.2c0-2.5 2-4.4 4.4-4.4 2.5 0 4.4 2 4.4 4.4 0 2.5-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4z"/>
	</g>
</svg>
	);
};

export default Anchor;