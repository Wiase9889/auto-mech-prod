import React from 'react';

function Slim(props) {
	const title = props.title || "slim";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M9.5 28c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l2.3 2.3H3c-1 0-1.8.8-1.8 1.8S2 36.2 3 36.2h6.3L7 38.5c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l5.2-5.2c.7-.7.7-1.8 0-2.5L9.5 28z"/>
		<path d="M32 29.2c1.5 0 2.6-1.2 2.6-2.6S33.4 24 32 24s-2.6 1.2-2.6 2.6 1.2 2.6 2.6 2.6z"/>
		<path d="M61 32.7h-6.3l2.2-2.2c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-5.2 5.2c-.7.7-.7 1.8 0 2.5l5.2 5.2c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-2.3-2.3H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
		<path d="M47.4 40.2c0-1.9-.6-3.8-1.4-6.4-.6-1.9-1.2-4-1.8-6.6-1.3-5.5 1.8-14.4 1.8-14.5.3-.9-.2-1.9-1.1-2.2-.9-.3-1.9.2-2.2 1.1-.1.4-3.4 10-2 16.5.2 1 .5 2 .7 2.9-1 .1-2 .2-3 .4-2.1.3-4.2.6-6.4.6s-4.4-.3-6.5-.7c-1.1-.2-2.2-.3-3.3-.4.2-.9.5-1.8.7-2.8 1.4-6.5-1.8-16.1-2-16.5-.3-.9-1.3-1.4-2.2-1.1-.9.3-1.4 1.3-1.1 2.2 0 .1 3.1 9 1.8 14.6-.6 2.6-1.2 4.7-1.8 6.6-.8 2.5-1.4 4.5-1.4 6.4 0 .9.2 2.2.6 3.6v.1c.9 3.6 2.4 7.8 2.6 8.5.3.7.9 1.2 1.6 1.2.2 0 .4 0 .6-.1.9-.3 1.4-1.3 1.1-2.2-.7-2-1.7-5.1-2.4-7.5.5-.3 1.9-.6 4.7-.6 2.5 0 4.7 1.4 5.1 2v5.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.1-.1c0-.5 1.4-1.9 3.9-1.9 3 0 4.8.4 5.5.7-.7 2.4-1.6 5.4-2.4 7.5-.3.9.1 1.9 1.1 2.2.2.1.4.1.6.1.7 0 1.4-.4 1.6-1.2.2-.7 1.8-5 2.7-8.5V44c.4-1.6.7-2.9.7-3.8zm-9.7-.5c-2.3 0-4.5.9-5.8 2.2-1.7-1.3-4.3-2.2-6.7-2.2-2.2 0-4 .2-5.4.7v-.1c0-1.3.5-3.1 1.2-5.3.1-.2.1-.5.2-.7 1.2.1 2.4.3 3.7.5 2.1.3 4.6.7 7.1.7s4.8-.4 6.9-.7c1.2-.2 2.4-.4 3.5-.5.1.2.1.4.2.6.7 2.2 1.2 4 1.2 5.3v.1c-1.4-.4-3.5-.6-6.1-.6z"/>
	</g>
</svg>
	);
};

export default Slim;