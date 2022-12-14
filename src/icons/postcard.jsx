import React from 'react';

function Postcard(props) {
	const title = props.title || "postcard";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M57 11.8H7c-3.2 0-5.8 2.6-5.8 5.8v29c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8v-29c0-3.3-2.6-5.8-5.8-5.8zm2.3 34.7c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3v-29c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v29z"/>
		<path d="M32 21c-1 0-1.8.8-1.8 1.8v15.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V22.8c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M10.9 32.4h9.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-9.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M52.7 21h-9.8c-1.2 0-2.1 1-2.1 2.1v9.8c0 1.2 1 2.1 2.1 2.1h9.8c1.2 0 2.1-1 2.1-2.1v-9.8c0-1.1-.9-2.1-2.1-2.1zm-1.4 10.6h-7v-7h7v7z"/>
		<path d="M22.7 36.8H10.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h11.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Postcard;