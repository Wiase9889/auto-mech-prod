import React from 'react';

function Teabag(props) {
	const title = props.title || "teabag";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M14.9 31.1h5.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M60.5 43.6l-4.3-2.2V21.9c0-11.4-9.1-20.6-20.2-20.6-11.3 0-19.1 6.3-20.1 15.8H7.4c-1.5 0-2.7 1.1-3 2.5l-1.7 7.3c-.2.4-.2.8-.2.9v31.9c0 1.7 1.4 3.1 3.1 3.1h23.6c1.6 0 3-1.4 3.1-3.2V27.7c0-.2 0-.4-.1-.5l-1.8-7.6c-.3-1.5-1.6-2.6-3-2.6h-8.1C20.5 8 28.8 4.8 36 4.8c9.2 0 16.7 7.7 16.7 17.1v19.6l-4.3 2.2c-.6.3-1 .9-1 1.6V61c0 1 .8 1.8 1.8 1.8h10.5c1 0 1.8-.8 1.8-1.8V45.2c-.1-.7-.4-1.3-1-1.6zm-31.6-16V59.2H6.1V27.9l1.7-7.3h19.4l1.7 7zm29 31.7h-7v-13l3.5-1.8 3.5 1.8v13z"/>
	</g>
</svg>
	);
};

export default Teabag;