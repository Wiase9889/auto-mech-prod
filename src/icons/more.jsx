import React from 'react';

function More(props) {
	const title = props.title || "more";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 25c-3.9 0-7 3.2-7 7 0 3.9 3.2 7 7 7 3.9 0 7-3.2 7-7 0-3.9-3.1-7-7-7zm0 10.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
		<path d="M55.7 25c-3.9 0-7 3.2-7 7 0 3.9 3.2 7 7 7 3.9 0 7-3.2 7-7 .1-3.9-3.1-7-7-7zm0 10.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.5 3.5-3.5 3.5z"/>
		<path d="M8.3 25c-3.9 0-7 3.2-7 7 0 3.9 3.2 7 7 7 3.9 0 7-3.2 7-7 0-3.9-3.2-7-7-7zm0 10.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
	</g>
</svg>
	);
};

export default More;