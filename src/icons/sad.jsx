import React from 'react';

function Sad(props) {
	const title = props.title || "sad";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M32 38.2c-5.3 0-10.4 2-14.3 5.6-.7.7-.8 1.8-.1 2.5.7.7 1.8.8 2.5.1 3.2-3 7.4-4.6 11.9-4.6 4.4 0 8.6 1.6 11.9 4.6.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6.7-.7.6-1.8-.1-2.5-3.9-3.6-9-5.6-14.3-5.6z"/>
		<path d="M20.1 26.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"/>
		<path d="M43.9 18.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.9-4-4-4z"/>
	</g>
</svg>
	);
};

export default Sad;