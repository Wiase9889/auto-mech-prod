import React from 'react';

function HighlightAlt(props) {
	const title = props.title || "highlight alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M60.6 9.8l-5.5-5.5c-2.8-2.8-7.5-2.8-10.3 0L13.4 35.7c-.4.4-.6 1-.6 1.5s.2 1.1.6 1.5l.7.7-5.4 5.4c-.9.9-1.4 2-1.4 3.2L2 53.3c-.6.6-.8 1.4-.7 2.2.1.8.6 1.5 1.3 1.9l7.6 4.1c.4.2.9.3 1.3.3.7 0 1.4-.3 2-.8l3.4-3.4c1.2-.1 2.3-.6 3.1-1.4l5.4-5.4.7.7c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l31.4-31.4c2.8-2.8 2.8-7.5-.1-10.3zM11.4 58.2l-6.1-3.3 3.2-3.2s0 .1.1.1l4.5 4.5s.1.1.2.1l-1.9 1.8zm6.2-4.4c-.5.5-1.4.5-2 0l-4.5-4.5c-.5-.5-.5-1.4 0-2l5.4-5.4 6.4 6.4-5.3 5.5zm40.5-36.2L27.7 48.1 16.8 37.2 47.3 6.8c1.5-1.5 3.9-1.5 5.4 0l5.5 5.5c1.4 1.5 1.4 3.9-.1 5.3z"/>
	</g>
</svg>
	);
};

export default HighlightAlt;