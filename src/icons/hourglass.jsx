import React from 'react';

function Hourglass(props) {
	const title = props.title || "hourglass";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M39.5 62.8h-15c-3.4 0-6.5-1.6-8.4-4.3-1.8-2.6-2.2-5.7-1-8.6L21.8 32 15 14.2c-1.1-2.9-.7-6.1 1-8.6 1.9-2.7 5-4.3 8.4-4.3h15.1c3.4 0 6.5 1.6 8.4 4.3 1.8 2.6 2.2 5.7 1 8.6L42.2 32 49 49.8c1.1 2.9.7 6.1-1 8.6-1.9 2.7-5.1 4.4-8.5 4.4zm-15-58c-2.2 0-4.3 1.1-5.5 2.8-1.1 1.6-1.4 3.6-.7 5.4l6.9 18c.2.6.2 1.4 0 2l-6.9 18c-.7 1.8-.5 3.8.7 5.4 1.2 1.8 3.3 2.8 5.5 2.8h15.1c2.2 0 4.3-1.1 5.5-2.8 1.1-1.6 1.4-3.6.7-5.4l-6.9-18c-.2-.6-.2-1.4 0-2l6.9-18c.7-1.8.5-3.8-.7-5.4-1.2-1.8-3.3-2.8-5.5-2.8H24.5zm17.6 27.5zm-20.2 0zm20.2-.6z"/>
	</g>
</svg>
	);
};

export default Hourglass;