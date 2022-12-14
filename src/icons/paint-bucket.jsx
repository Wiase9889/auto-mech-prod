import React from 'react';

function PaintBucket(props) {
	const title = props.title || "paint bucket";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M59.4 37.7L33.8 12.6V8.8c0-4.2-3.8-7.5-8.4-7.5-4.6 0-8.4 3.4-8.4 7.5l.1 15.3v.2l-12.2 12c-.6.5-.9 1.3-1 2.1 0 .8.3 1.7.9 2.3l21.7 21.2c.6.6 1.4.9 2.2.9.8 0 1.5-.3 2.2-.8l19.9-19.5 7.3-.6c.9-.1 1.7-.8 2-1.6.2-1 0-1.9-.7-2.6zM20.5 8.8c0-2.2 2.2-4 4.9-4s4.9 1.9 4.9 4v2.6l-9.7 9.5-.1-12.1zm28.7 30.3l-20.5 20L7.6 38.5l23.8-23.3 8 7.8-6.4 6.3c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l6.4-6.3 4.3 4.3-4 4c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l4.1-4 6.5 6.4-5.9.4z"/>
	</g>
</svg>
	);
};

export default PaintBucket;