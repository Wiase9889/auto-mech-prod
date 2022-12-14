import React from 'react';

function Bug(props) {
	const title = props.title || "bug";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M58.7 39.4h-9.9c-.1-2.8-.5-5.5-1.3-7.9l7.7-6.8c.7-.6.8-1.7.2-2.5-.6-.7-1.7-.8-2.5-.2l-6.8 6c-1.6-3.4-3.9-6.1-6.5-8 1.2-.3 2.4-1 3.3-1.9 1.2-1.3 1.8-3.1 1.6-5-.6-6.7-6-11.8-12.6-11.8s-12 5.1-12.7 11.8c-.2 1.8.4 3.6 1.6 5 .9 1 2.1 1.7 3.3 2-2.6 1.8-4.8 4.5-6.4 7.8L11.1 22c-.7-.6-1.8-.6-2.5.2-.6.7-.6 1.8.2 2.4l7.5 6.6c-.8 2.5-1.3 5.3-1.3 8.1H5.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H15c.2 2.4.7 4.7 1.5 6.8l-7.8 6.8c-.7.7-.7 1.8-.1 2.5.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.4l6.9-6.1c3.1 5.8 8.1 9.7 13.9 9.7 5.8 0 10.9-3.9 14-9.8l7.1 6.3c.3.3.7.4 1.2.4s1-.2 1.3-.6c.6-.7.6-1.8-.2-2.5l-8-7c.7-2.1 1.2-4.3 1.4-6.6h10c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8zm-36-26c.5-4.9 4.5-8.7 9.3-8.7 4.7 0 8.7 3.7 9.1 8.7.1.8-.2 1.7-.7 2.2-.6.6-1.4 1-2.1 1H25.5c-.8 0-1.5-.3-2.1-1-.6-.5-.8-1.3-.7-2.2zm9.2 45.9c-7.4 0-13.4-8.6-13.4-19.1S24.5 21 31.9 21c5.2 0 9.7 4.3 12 10.5v.1c.9 2.6 1.5 5.5 1.5 8.6v.6c0 .1-.1.3-.1.5v.4c-.5 9.7-6.4 17.6-13.4 17.6z"/>
	</g>
</svg>
	);
};

export default Bug;