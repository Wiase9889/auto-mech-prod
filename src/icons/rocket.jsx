import React from 'react';

function Rocket(props) {
	const title = props.title || "rocket";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M62 19.5L53.5 11l-.3-.2c-.5-.3-1-.5-1.6-.5L38 11.4C28.3 3 15.8-.6 5.3 2.2c-1.5.4-2.7 1.6-3.1 3-2.8 10.5.8 23.1 9.3 33l-1.2 13.4v.2c0 .5.2 1.1.5 1.6l8.7 8.8c.5.5 1.1.7 1.7.7.2 0 .5 0 .7-.1.9-.3 1.6-1 1.8-1.9l1.3-12c1.7.8 3.3 1.6 5.1 2.2.5.2.9.2 1.4.2 1.1 0 2.3-.5 3.1-1.3L50 34.6c1.2-1.2 1.6-3 1.1-4.5-.6-1.7-1.4-3.4-2.2-5.1l11.7-1.3h.2c.9-.2 1.6-.9 1.9-1.8.2-.8 0-1.8-.7-2.4zM20.5 58.1l-6.7-6.7.9-9.9c2.2 2.1 4.5 3.9 7 5.5l-1.2 11.1zm27.1-25.9L32.2 47.6c-.2.2-.6.3-.9.2-5.5-1.9-10.7-5.3-15-9.6C7 28.9 2.8 16.3 5.6 6.2c.1-.3.3-.5.6-.6 2.1-.6 4.3-.8 6.5-.8 8.7 0 18.2 4.1 25.5 11.5 4.4 4.4 7.7 9.6 9.6 15.1.1.2 0 .5-.2.8zM47 21.7c-1.6-2.5-3.4-4.9-5.5-7.1l9.9-.8 6.7 6.7L47 21.7z"/>
		<path d="M55.8 41c-.3-.2-1.1-.5-2 .2-1 .8-6.2 6-6.8 6.6-6.4 6.4-6.4 6.4-6.1 7.6.1.3.2.6.5.8 3.2 3.2 8.1 3.9 11.8 3.9 2.8 0 5-.4 5.2-.5.7-.1 1.2-.7 1.4-1.4.1-.5 2.2-11.3-3.5-17-.2 0-.3-.1-.5-.2zm.6 15.4c-2.9.4-8 .4-11.3-1.7 2.3-2.4 7.3-7.4 9.7-9.7 2.2 3.6 1.9 9 1.6 11.4z"/>
		<path d="M25.9 17.9c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.5-8-8-8zm0 12.6c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5c.1 2.4-2 4.5-4.5 4.5z"/>
	</g>
</svg>
	);
};

export default Rocket;