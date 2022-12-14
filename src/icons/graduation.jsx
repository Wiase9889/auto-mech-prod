import React from 'react';

function Graduation(props) {
	const title = props.title || "graduation";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M62.1 34.5l-4.5-4.6v-4.4c.7-.6 1-1.5 1-2.4 0-1.3-.7-2.4-1.9-3L31.4 8.6c-.8-.4-1.8-.4-2.6 0L3.2 19.9c-1.2.5-1.9 1.7-1.9 3s.7 2.5 1.9 3l9 4.1v12.6c0 7.2 5.8 13.1 13 13.1h9.4c7.2 0 13-5.9 13-13.1V30.2l5.3-2.4 1.1-.5v2.8l-4.3 4.4c-.9.9-.9 2.4 0 3.3l4.5 4.6c.4.4 1 .7 1.6.7.6 0 1.2-.3 1.6-.7l4.5-4.6c1.1-1 1.1-2.4.2-3.3zm-17.9 8c0 5.3-4.3 9.6-9.5 9.6h-9.4c-5.3 0-9.5-4.3-9.5-9.6v-11L29 37.4c.4.2.9.3 1.3.3s.9-.1 1.3-.3l12.6-5.7v10.8zm7.3-17.9l-21.3 9.6L5.1 22.9l25-11 24.8 11.2-3.4 1.5zM55.9 39l-2.8-2.9 2.8-2.9 2.8 2.9-2.8 2.9z"/>
	</g>
</svg>
	);
};

export default Graduation;