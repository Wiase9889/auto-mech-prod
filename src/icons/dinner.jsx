import React from 'react';

function Dinner(props) {
	const title = props.title || "dinner";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M46.7 1.3h-3.3c-1.8 0-3.2 1.4-3.2 3.2v53.7c0 2.5 2.1 4.6 4.6 4.6h2.9c2.5 0 4.6-2.1 4.6-4.6V36.9h2.1c1.8 0 3.2-1.4 3.2-3.2V12.2c-.1-6.1-5-10.9-10.9-10.9zm1 58h-2.9c-.6 0-1.1-.5-1.1-1.1V36.9h5.1v21.2c0 .6-.5 1.2-1.1 1.2zm6.4-25.9H43.6V4.8h3c4.1 0 7.4 3.3 7.4 7.4v21.2z"/>
		<path d="M26.4 1.5c-1 0-1.8.8-1.8 1.8v15.2H19V3.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v15.2H9.9V3.2c0-1-.8-1.8-1.8-1.8s-1.7.9-1.7 1.8v25.5c0 1.5 1.1 2.6 2.6 2.6h2.3v26.8c0 2.5 2.1 4.6 4.6 4.6h2.8c2.5 0 4.6-2.1 4.6-4.6V31.4h2.3c1.5 0 2.6-1.1 2.6-2.6V3.2c-.1-.9-.8-1.7-1.8-1.7zm-6.6 56.7c0 .6-.5 1.1-1.1 1.1h-2.8c-.6 0-1.1-.5-1.1-1.1V31.4h5v26.8zM9.9 27.9v-6h14.8v6H9.9z"/>
	</g>
</svg>
	);
};

export default Dinner;