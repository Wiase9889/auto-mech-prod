import React from 'react';

function ExitDown(props) {
	const title = props.title || "exit down";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M29.3 40.7c.6.6 1.5 1 2.3 1 .9 0 1.7-.3 2.3-1l7.4-7.4c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-5.5 5.5V10.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v25.4l-5.5-5.5c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l7.6 7.4z"/>
		<path d="M58.4 30.2h-9.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9.2c.5 0 .9.4.9.9v11.7c0 2.8-2.3 5-5 5H9.8c-2.8 0-5-2.3-5-5V34.6c0-.5.4-.9.9-.9h9.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H5.6c-2.4 0-4.4 2-4.4 4.4v11.7c0 4.7 3.8 8.5 8.5 8.5h44.4c4.7 0 8.5-3.8 8.5-8.5V34.6c.2-2.4-1.8-4.4-4.2-4.4z"/>
	</g>
</svg>
	);
};

export default ExitDown;