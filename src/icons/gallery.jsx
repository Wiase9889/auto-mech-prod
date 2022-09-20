import React from 'react';

function Gallery(props) {
	const title = props.title || "gallery";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M23.1 41.5c3.1 0 5.7-2.5 5.7-5.6 0-3.1-2.5-5.6-5.7-5.6s-5.7 2.5-5.7 5.6c.1 3.1 2.6 5.6 5.7 5.6zm0-7.8c1.2 0 2.2 1 2.2 2.1 0 1.2-1 2.1-2.2 2.1-1.1.1-2.1-.9-2.1-2 0-1.2 1-2.2 2.1-2.2z"/>
		<path d="M49.2 20.9c3.1 0 5.7-2.5 5.7-5.6 0-3.1-2.5-5.6-5.7-5.6s-5.7 2.5-5.7 5.6c0 3.1 2.6 5.6 5.7 5.6zm0-7.7c1.2 0 2.2 1 2.2 2.1s-1 2.1-2.2 2.1-2.2-1-2.2-2.1 1-2.1 2.2-2.1z"/>
		<path d="M55.5 1.5H35c-4 0-7.2 3.2-7.2 7.2V22H7.5c-3.2 0-5.8 2.6-5.8 5.8v29c0 3.2 2.6 5.8 5.8 5.8H31c3.2 0 5.8-2.6 5.8-5.8V42h18.8c4 0 7.2-3.2 7.2-7.2v-26c0-4.1-3.3-7.3-7.3-7.3zM35 5h20.6c2.1 0 3.7 1.7 3.7 3.7v15.1c-.8.5-2 1.3-2.2 1.5-.9.6-1.8 1.4-2.7 2.1-2.6 2.3-4.4 3.6-6.8 2.7-.4-.2-.9-.6-1.4-1l-.4-.3c-1.5-1.2-3.2-2.6-5.3-3.2-1.3-.4-2.7-.4-4.1-.1-.8-2-2.8-3.5-5.1-3.6V8.7C31.2 6.6 32.9 5 35 5zM7.5 25.5H31c1.2 0 2.3 1 2.3 2.3v16.5c-.5.3-1.2.8-2.2 1.5-.9.6-1.8 1.4-2.7 2.1-2.6 2.3-4.4 3.6-6.8 2.7-.5-.2-1-.6-1.6-1.1l-.2-.2c-1.5-1.2-3.2-2.6-5.3-3.2-3.5-1.1-6.6.7-9.2 2.3V27.8c-.1-1.3.9-2.3 2.2-2.3zM31 59H7.5c-1.2 0-2.3-1-2.3-2.3v-4.1c.5-.3.9-.6 1.4-.8 2.4-1.5 4.6-2.9 6.8-2.2 1.5.4 2.8 1.5 4.1 2.6l.2.2c.7.6 1.5 1.3 2.6 1.7.9.3 1.8.5 2.7.5 3.1 0 5.6-2.1 7.6-3.9.8-.7 1.6-1.4 2.3-1.9.1-.1.2-.1.3-.2v8.2c0 1.2-1 2.2-2.2 2.2zm24.5-20.5H36.7v-9.4c1-.3 1.8-.3 2.7-.1 1.5.4 2.8 1.5 4.1 2.6l.3.2c.7.6 1.5 1.3 2.5 1.6 1 .3 1.8.5 2.7.5 3.1 0 5.6-2.1 7.6-3.9.8-.7 1.6-1.4 2.4-1.9.1-.1.2-.1.3-.2v6.8c0 2.1-1.7 3.8-3.8 3.8z"/>
	</g>
</svg>
	);
};

export default Gallery;