import React from 'react';

function BrushAlt(props) {
	const title = props.title || "brush alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61 5.3c-1.2-1.2-2.8-1.9-4.4-1.9-1.6 0-3.1.6-4.3 1.7L15.1 39.5c-1.2 0-2.5.2-4 .8C9 41.3 8 43 7 44.8c-1 1.6-2 3.5-4.5 5.4-.9.7-1.3 1.7-1.2 2.8S2 55 3 55.6c4 2.1 10.2 5 15.4 5 2 0 3.9-.4 5.4-1.6 2.3-1.7 3.4-4 3.4-6.6v-.7l34.1-37.6c2.1-2.5 2-6.4-.3-8.8zM21.6 56.2c-2.6 1.9-8.9.6-16.6-3.5 2.7-2.2 4-4.4 5-6.1.9-1.6 1.5-2.5 2.6-3 2.7-1.2 4.9 0 5.2.1 2.8 2 5.8 5.6 5.9 8.7-.1 1.5-.8 2.8-2.1 3.8zm36.9-44.5L25.8 47.8c-1.4-2.8-3.8-5.3-6.1-7h-.1l-.4-.2L54.7 7.7c1-1 2.8-1 3.8.1 1 1 1 2.8 0 3.9z"/>
	</g>
</svg>
	);
};

export default BrushAlt;