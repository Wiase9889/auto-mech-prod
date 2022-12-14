import React from 'react';

function Exit(props) {
	const title = props.title || "exit";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M14.2 33.8h25.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H14.8l5.3-5.2c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-7.4 7.4c-.6.6-1 1.5-1 2.3 0 .9.3 1.7 1 2.3l7.4 7.4c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-5.8-5.6z"/>
		<path d="M46.3 1.3H34.6c-2.4 0-4.4 2-4.4 4.4v9.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V5.6c0-.5.4-.9.9-.9h11.7c2.8 0 5 2.3 5 5v44.4c0 2.8-2.3 5-5 5H34.6c-.5 0-.9-.4-.9-.9V49c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v9.2c0 2.4 2 4.4 4.4 4.4h11.7c4.7 0 8.5-3.8 8.5-8.5V9.8c.1-4.7-3.7-8.5-8.4-8.5z"/>
	</g>
</svg>
	);
};

export default Exit;