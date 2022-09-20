import React from 'react';

function Thunder(props) {
	const title = props.title || "thunder";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M57.8 19.6c-2.8-3-6.6-5-10.6-5.7-2.2-3.6-5.5-6.3-9.3-7.6-1.7-.7-3.7-1-5.8-1-9.7 0-17.5 7.7-17.9 17.2-7.3.7-12.9 6.8-12.9 14.1 0 7.9 6.2 14.1 14.1 14.1 1 0 1.7-.8 1.8-1.7 0-1-.8-1.8-1.7-1.8-5.9 0-10.6-4.7-10.6-10.6 0-6 4.7-10.6 10.7-10.6h.5c1 0 1.8-.8 1.8-1.8v-1.1c0-7.9 6.5-14.4 14.4-14.4 1.7 0 3.2.3 4.6.8 3.4 1.2 6.2 3.6 7.9 6.8.3.5.8.9 1.4.9 3.5.4 6.9 2.1 9.3 4.7 2.6 2.8 4 6.5 4 10.3 0 6.3-4 12-9.9 14.1-.9.3-1.4 1.3-1 2.2.3.9 1.3 1.4 2.2 1 7.1-2.5 12-9.5 12-17.3 0-4.7-1.8-9.1-5-12.6z"/>
		<path d="M49 32.6c-.5-1.1-1.6-1.8-2.8-1.8h-4.3l.9-1.6c.8-1.4.7-3.1-.1-4.5-.8-1.4-2.3-2.2-3.9-2.2h-8c-1.8 0-3.4 1-4.1 2.7l-5.8 12.9c-.4 1-.4 2.1.2 3 .6.9 1.6 1.4 2.6 1.4h5.5l-3.6 12.1c-.4 1.5.2 3 1.5 3.7.5.3 1 .4 1.5.4.9 0 1.8-.4 2.4-1.2l17.6-21.6c.7-1 .9-2.2.4-3.3zM29.5 53.8l3.8-12.6c.2-.5.1-1.1-.3-1.5-.3-.4-.9-.7-1.4-.7h-7.3l5.6-12.4c.2-.4.5-.6.9-.6h8c.5 0 .8.3.9.5.1.1.3.5 0 1l-2.3 4.2c-.3.5-.3 1.2 0 1.7s.9.9 1.5.9h6.4L29.5 53.8z"/>
	</g>
</svg>
	);
};

export default Thunder;