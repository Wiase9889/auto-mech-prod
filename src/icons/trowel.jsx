import React from 'react';

function Trowel(props) {
	const title = props.title || "trowel";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M60.9 49.8L48.6 37.4c-1.2-1.2-2.7-1.8-4.4-1.8-1.6 0-3.2.6-4.4 1.8L31.3 29l8.3-8.3c.8-.8 1.1-1.8.9-2.9-.2-1-.9-1.9-1.9-2.3L5.8 1.5c-1.2-.5-2.6-.2-3.5.7-1 .9-1.2 2.3-.7 3.5l14 32.8c.4 1 1.3 1.7 2.3 1.9.2 0 .4.1.6.1.8 0 1.6-.3 2.3-.9l8-8 8.5 8.5c-2.4 2.4-2.4 6.3 0 8.7l12.3 12.3c1.2 1.2 2.7 1.8 4.4 1.8s3.2-.6 4.4-1.8l2.5-2.5c2.4-2.6 2.4-6.4 0-8.8zM18.7 36.7L5.1 5l31.8 13.5-18.2 18.2zM58.4 56l-2.5 2.5c-1 1-2.7 1-3.8 0L39.9 46.2c-1-1-1-2.7 0-3.7l2.5-2.5c.5-.5 1.2-.8 1.9-.8s1.4.3 1.9.8l12.3 12.3c.9 1 .9 2.6-.1 3.7z"/>
	</g>
</svg>
	);
};

export default Trowel;