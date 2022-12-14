import React from 'react';

function Apple(props) {
	const title = props.title || "apple";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M54.8 47.8c-1.5-.8-2.9-2.1-4-3.8-1.6-2.4-2.4-5-2.4-7.8 0-2.6.7-4.9 2.2-7.2.6-.9 1.6-1.9 2.6-2.9.3-.3.5-.8.5-1.2s-.2-.9-.5-1.3c-.8-.8-1.6-1.5-2.3-2-2.1-1.5-4.5-2.2-7.3-2.2-1.7 0-3.7.4-6 1.2-2.3.8-3.9 1.2-5 1.2-.4 0-1.4 0-4.8-1-2.5-.7-4.5-1-6.1-1-3.9 0-7.1 1.7-9.7 4.9-2.4 3.3-3.7 7.6-3.7 12.9 0 5.4 1.7 11.2 5.1 17.3 3.4 5.9 6.9 8.8 10.3 8.8 1.3 0 2.8-.4 4.5-1.2 1.8-.8 3.5-1.1 4.9-1.1 1.5 0 3.3.4 5.3 1.1 2.1.7 3.7 1.1 4.8 1.1 2.9 0 5.8-2.3 8.8-6.7 1.5-2.2 2.8-4.6 3.6-7 .3-.8 0-1.7-.8-2.1zM49.1 55c-2.2 3.3-4.3 5.2-5.9 5.2-.2 0-1.1 0-3.6-.9-2.3-.9-4.5-1.3-6.5-1.3s-4 .5-6.3 1.4c-1.3.6-2.4.9-3.2.9-.9 0-3.5-.7-7.3-7.1-3.1-5.5-4.6-10.7-4.6-15.6 0-4.5 1.1-8.1 3.1-10.7 1.9-2.4 4.1-3.6 6.9-3.6 1.3 0 3 .3 5.1.9 3.4 1 4.8 1.2 5.8 1.2 1.5 0 3.4-.4 6.1-1.4 1.9-.7 3.5-1 4.8-1 2 0 3.8.5 5.3 1.6.2.1.3.2.5.4-.7.7-1.3 1.4-1.8 2.1-1.9 2.8-2.9 5.9-2.9 9.2 0 3.5 1 6.8 3 9.8 1.1 1.7 2.5 3 3.9 4-.4 1.7-1.3 3.3-2.4 4.9z"/>
		<path d="M32.9 16c.2 0 .5 0 .7-.1 2.3-.4 5.5-1.3 7.7-3.2l.1-.1c2.2-2.2 3.1-5.6 3.5-8.2.2-1.2-.2-2.3-1.1-3.2-.8-.8-2-1.2-3.2-1-2.5.4-5.9 1.3-8.2 3.4-1.3 1.4-2.4 4-3.1 7.9-.2 1.2.1 2.5 1 3.3.7.8 1.6 1.2 2.6 1.2zm-.2-3.8c.9-4.5 1.9-5.8 2.1-6 1.2-1.1 3.5-2 6.3-2.4 0 0 .1 0 .1.1.1.1.1.1.1.2-.3 2.7-1.2 4.8-2.3 6-1.2 1-3.4 1.9-6 2.4-.1 0-.2 0-.2-.1-.1-.1-.1-.2-.1-.2z"/>
	</g>
</svg>
	);
};

export default Apple;