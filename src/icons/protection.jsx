import React from 'react';

function Protection(props) {
	const title = props.title || "protection";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M54.3 7.2L33.2 1.4c-.8-.2-1.6-.2-2.3 0L9.7 7.2c-1.9.5-3.2 2.3-3.2 4.3v15.4c0 15.8 9.4 29.8 23.8 35.6.5.2 1.1.3 1.7.3.6 0 1.1-.1 1.7-.3 14.5-5.9 23.8-19.9 23.8-35.7V11.4c0-1.9-1.3-3.7-3.2-4.2zM54 26.7c0 14.2-8.7 27.2-21.6 32.4-.2.1-.5.1-.7 0C18.5 53.9 10 41.2 10 26.8V11.4c0-.4.3-.8.7-.9l21.1-5.8h.4l21.1 5.8c.4.1.7.5.7.9v15.3z"/>
		<path d="M44.1 22.7L29.4 35l-6.8-5.7c-.7-.6-1.8-.5-2.5.2s-.5 1.8.2 2.5l7.9 6.6c.3.3.7.4 1.1.4s.8-.1 1.1-.4l15.8-13.3c.7-.6.8-1.7.2-2.5-.5-.6-1.6-.7-2.3-.1z"/>
	</g>
</svg>
	);
};

export default Protection;