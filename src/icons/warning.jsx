import React from 'react';

function Warning(props) {
	const title = props.title || "warning";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61.1 42L38.9 11.8c-1.6-2.2-4.2-3.5-6.9-3.5-2.8 0-5.3 1.3-6.9 3.5L2.9 42C1 44.6.7 48.1 2.2 51c1.5 2.9 4.4 4.7 7.7 4.7h44.3c3.3 0 6.2-1.8 7.7-4.7s1.1-6.4-.8-9zm-2.4 7.4c-.9 1.7-2.6 2.8-4.5 2.8H9.9c-2 0-3.7-1-4.5-2.8-.9-1.7-.7-3.7.4-5.3l22.1-30.2c1-1.3 2.5-2.1 4.1-2.1 1.6 0 3.1.8 4.1 2.1l22.1 30.2c1.2 1.6 1.4 3.5.5 5.3z"/>
		<path d="M32 38c1 0 1.8-.8 1.8-1.8V25c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v11.3c0 .9.8 1.7 1.8 1.7z"/>
		<path d="M32 41.3c-1.6 0-2.9 1.3-2.9 2.9 0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9 0-1.6-1.3-2.9-2.9-2.9z"/>
	</g>
</svg>
	);
};

export default Warning;