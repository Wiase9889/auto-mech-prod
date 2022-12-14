import React from 'react';

function Drop(props) {
	const title = props.title || "drop";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32.1 62.8c-11 0-20.1-8.5-20.4-19v-2.1c0-5.1 1.3-10.7 3.9-16.7 3.1-7.2 8.1-15.4 13.7-22.4.7-.9 1.7-1.4 2.8-1.4 1.1 0 2.1.5 2.8 1.3C40.8 9.9 45.7 18 48.6 25.3c2.5 6.1 3.7 11.5 3.7 16.5v2c-.1 10.5-9.2 19-20.2 19zm0-58c-5.5 6.8-10.3 14.7-13.3 21.6-2.4 5.5-3.6 10.7-3.6 15.3v2c.2 8.6 7.8 15.5 16.9 15.5 9.2 0 16.7-6.9 16.7-15.4v-2c0-4.5-1.1-9.5-3.5-15.2-2.7-6.9-7.5-14.8-13.2-21.8.1 0 0 0 0 0z"/>
	</g>
</svg>
	);
};

export default Drop;