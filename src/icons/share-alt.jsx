import React from 'react';

function ShareAlt(props) {
	const title = props.title || "share alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M2.8 13.8l8.6 6.5c.3.2.7.3 1 .3.5 0 1.1-.2 1.4-.7.6-.8.4-1.9-.4-2.4L7 12.7h14.6c6.1 0 11.1 5 11.1 11.1v16.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V23.8c0-8.1-6.6-14.6-14.6-14.6H7l6.5-4.7c.8-.6.9-1.7.4-2.4-.6-.8-1.7-.9-2.4-.4L2.8 7.9c-1 .7-1.6 1.8-1.6 2.9 0 1.2.6 2.2 1.6 3z"/>
		<path d="M61 38.2c-1 0-1.8.8-1.8 1.8v15.5c0 2.1-1.7 3.8-3.8 3.8H8.6c-2.1 0-3.8-1.7-3.8-3.8V39.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v15.5c0 4 3.3 7.3 7.3 7.3h46.8c4 0 7.3-3.3 7.3-7.3V39.9c.2-1-.6-1.7-1.6-1.7z"/>
	</g>
</svg>
	);
};

export default ShareAlt;