import React from 'react';

function Night(props) {
	const title = props.title || "night";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M29.7 5h.1c1.6.3 3.3.6 4.9 1.1C48.6 10.7 56.5 25.3 52.6 39 49.2 51.2 38 59 25.9 59c-2.7 0-5.5-.4-8.2-1.2-2.5-.8-4.9-1.9-7-3.2-.6-.4-.4-1.4.4-1.4 11.5-.4 22-7.8 25.6-19.1 3.2-10.2 0-20.8-7.5-27.7-.5-.5-.1-1.4.5-1.4m0-3.5c-1.8 0-3.4 1.1-4 2.8-.6 1.7-.2 3.5 1.1 4.6 6.7 6.2 9.2 15.5 6.5 24.1-3 9.6-12 16.3-22.3 16.7-1.9 0-3.5 1.3-4 3.1s.3 3.8 1.9 4.7c2.6 1.6 5.2 2.8 7.8 3.6 3 .9 6.1 1.4 9.2 1.4 14 0 26.4-9.2 30.2-22.5C60.5 24.4 51.7 8.1 36 2.8c-1.7-.5-3.5-1-5.4-1.3h-.9z"/>
	</g>
</svg>
	);
};

export default Night;