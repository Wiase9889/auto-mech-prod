import React from 'react';

function Reddit(props) {
	const title = props.title || "reddit";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<g id="eyes_1_">
			<circle cx="22.6" cy="35.9" r="4.2"/>
			<ellipse cx="41.4" cy="35.9" rx="4.2" ry="4.2"/>
		</g>
		<path id="mouth" d="M32 51.2c4.6 0 7.9-1.1 10-3.1.4-.4.4-1.3 0-1.7-.4-.4-1.3-.4-1.7 0-1.5 1.7-4.3 2.4-8.3 2.4s-6.7-.8-8.3-2.4c-.4-.4-1.3-.4-1.7 0-.4.4-.4 1.3 0 1.7 2.1 2.1 5.4 3.1 10 3.1z"/>
		<path id="body_outline" d="M45.7 55.3c2-.8 3.9-1.7 5.6-2.8 5.3-3.5 8.3-8.3 8.3-13.2 0-.7-.1-1.4-.1-2 2-1.3 3.5-3.5 3.5-6 0-3.9-3.2-7-7-7-1.7 0-3.5.7-4.6 1.7-4.8-3.1-10.9-4.8-17.5-5l3.6-11.5 9.8 2.4c0 3.2 2.7 5.8 5.8 5.8s5.8-2.7 5.8-5.8S56.1 6 53 6c-2.4 0-4.5 1.4-5.3 3.5L36.8 7.2c-.6-.2-1.3.1-1.4.8l-4.2 13.2c-7 .1-13.5 2-18.5 5-1.3-1.1-2.9-1.7-4.6-1.7-3.9 0-7 3.2-7 7 0 2.5 1.4 4.8 3.5 6-.1.7-.1 1.4-.1 2 0 5 2.9 9.7 8.3 13.2 1.7 1.1 3.5 2 5.6 2.8-.1-.2 14.4 5.8 27.3-.2zm7.3-47c1.8 0 3.5 1.5 3.5 3.5 0 1.8-1.5 3.5-3.5 3.5-1.8 0-3.5-1.5-3.5-3.5s1.6-3.5 3.5-3.5zm-49.5 23c0-2.5 2-4.6 4.6-4.6 1 0 2 .3 2.7.8-2.7 2.1-4.6 4.6-5.6 7.4a4.6 4.6 0 0 1-1.7-3.6zM32 55.4c-13.9 0-25.2-7.3-25.2-16S18.1 23.3 32 23.3s25.2 7.3 25.2 16S45.9 55.4 32 55.4zm26.9-20.6c-1-2.7-2.9-5.2-5.6-7.4.8-.6 1.7-.8 2.7-.8 2.5 0 4.6 2 4.6 4.6-.1 1.5-.7 2.8-1.7 3.6z"/>
	</g>
</svg>
	);
};

export default Reddit;