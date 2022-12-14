import React from 'react';

function Instagram(props) {
	const title = props.title || "instagram";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 17.3c-8.1 0-14.7 6.6-14.7 14.7S23.9 46.7 32 46.7 46.7 40.1 46.7 32 40.1 17.3 32 17.3zm0 25.9c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2 6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z"/>
		<path d="M48.1 10.1c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8z"/>
		<path d="M48 .3H16C7.3.3.3 7.3.3 16v32c0 8.7 7.1 15.7 15.8 15.7h32c8.7 0 15.7-7.1 15.7-15.8V16C63.8 7.3 56.7.3 48 .3zM60.3 48c0 6.8-5.5 12.3-12.2 12.3H16C9.3 60.3 3.8 54.8 3.8 48V16C3.8 9.3 9.3 3.8 16 3.8h32c6.8 0 12.3 5.5 12.3 12.3V48z"/>
	</g>
</svg>
	);
};

export default Instagram;