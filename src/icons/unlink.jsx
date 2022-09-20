import React from 'react';

function Unlink(props) {
	const title = props.title || "unlink";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M29.3 13l-8.4-8.3C16.4.2 9.1.2 4.6 4.7c-2.2 2.2-3.4 5.1-3.4 8.1s1.2 6 3.4 8.1l8.3 8.4c2.2 2.2 5.2 3.4 8.1 3.4 2.9 0 5.9-1.1 8.1-3.4 2.2-2.1 3.4-5 3.4-8.1.1-3.1-1.1-6-3.2-8.2zM15.4 26.8l-8.3-8.4c-1.5-1.5-2.4-3.5-2.4-5.7S5.5 8.6 7.1 7c1.6-1.6 3.6-2.3 5.7-2.3 2 0 4.1.8 5.7 2.3l8.3 8.3c1.5 1.5 2.3 3.5 2.3 5.7 0 1.7-.5 3.2-1.4 4.5l-3.1-3.1c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l3 2.9c-3.1 2-7.1 1.6-9.7-1z"/>
		<path d="M59.4 43.1L51 34.8c-4.5-4.5-11.8-4.5-16.3 0-2.2 2.2-3.4 5.1-3.4 8.1 0 3.1 1.2 6 3.4 8.1l8.3 8.4c2.2 2.2 5.2 3.4 8.1 3.4 2.9 0 5.9-1.1 8.1-3.4 2.2-2.1 3.4-5 3.4-8 .2-3.2-1-6.1-3.2-8.3zm-2.5 13.8c-3.1 3.1-8.2 3.1-11.3 0l-8.3-8.4c-1.5-1.5-2.4-3.5-2.4-5.7 0-1.4.4-2.8 1.1-4l2.9 2.9c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-3-3c1.4-.9 3-1.4 4.6-1.4 2 0 4.1.8 5.7 2.3l8.3 8.3c1.5 1.5 2.3 3.6 2.3 5.7 0 2.3-.8 4.3-2.3 5.8z"/>
		<path d="M39.9 15.3c1 0 1.8-.8 1.8-1.8V5.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v7.9c.1 1 .9 1.8 1.8 1.8z"/>
		<path d="M48.7 24.1c0 1 .8 1.8 1.8 1.8h7.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-7.9c-1 0-1.8.8-1.8 1.8z"/>
		<path d="M43.8 20.3c.5 0 .9-.2 1.2-.5l6.7-6.8c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-6.7 6.8c-.7.7-.7 1.8 0 2.5.4.3.8.5 1.3.5z"/>
		<path d="M24.1 48.8c-1 0-1.8.8-1.8 1.8v7.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-7.9c-.1-1.1-.8-1.8-1.8-1.8z"/>
		<path d="M12.7 39.9c0-1-.8-1.8-1.8-1.8H5.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.3c1 0 1.8-.8 1.8-1.8z"/>
		<path d="M16.7 43.1L10 49.8c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l6.7-6.7c.7-.7.7-1.8 0-2.5-.6-.7-1.7-.7-2.4 0z"/>
	</g>
</svg>
	);
};

export default Unlink;