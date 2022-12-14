import React from 'react';

function Keyboard(props) {
	const title = props.title || "keyboard";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M57 11.8H7c-3.2 0-5.8 2.6-5.8 5.8v28.9c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8v-29c0-3.1-2.6-5.7-5.8-5.7zm2.3 34.7c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3v-29c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v29z"/>
		<path d="M23.1 26.7c.6 0 1-.4 1-1v-3.3c0-.6-.4-1-1-1h-3.3c-.6 0-1 .4-1 1v3.3c0 .6.4 1 1 1h3.3z"/>
		<path d="M24.1 33.6c0 .6.4 1 1 1h3.3c.6 0 1-.4 1-1v-3.3c0-.6-.4-1-1-1h-3.3c-.6 0-1 .4-1 1v3.3z"/>
		<path d="M34.6 33.6c0 .6.4 1 1 1h3.3c.6 0 1-.4 1-1v-3.3c0-.6-.4-1-1-1h-3.3c-.6 0-1 .4-1 1v3.3z"/>
		<path d="M30.4 26.7h3.3c.6 0 1-.4 1-1v-3.3c0-.6-.4-1-1-1h-3.3c-.6 0-1 .4-1 1v3.3c0 .6.4 1 1 1z"/>
		<path d="M44.2 21.5h-3.3c-.6 0-1 .4-1 1v3.3c0 .6.4 1 1 1h3.3c.6 0 1-.4 1-1v-3.3c0-.6-.5-1-1-1z"/>
		<path d="M42.5 39.7h-21c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h21.1c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default Keyboard;