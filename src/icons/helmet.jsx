import React from 'react';

function Helmet(props) {
	const title = props.title || "helmet";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M58 38.9h-.3v-.6c0-14.6-11.5-26.5-25.7-26.5S6.3 23.6 6.3 38.3v.6H6c-2.6 0-4.8 2.1-4.8 4.8v3.9c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8v-3.9c0-2.7-2.2-4.8-4.8-4.8zm-48.2-.6c0-8.4 4.4-15.8 10.9-19.8v5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.7c1.9-.7 3.9-1.2 6-1.4v10.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V15.3c2.1.2 4.1.6 6 1.4v6.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5c6.5 4 10.9 11.4 10.9 19.8v.6H9.8v-.5zm49.5 9.2c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3v-3.9c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v3.9z"/>
	</g>
</svg>
	);
};

export default Helmet;