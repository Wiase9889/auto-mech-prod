import React from 'react';

function Lock(props) {
	const title = props.title || "lock";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M51.1 19.7h-6.8v-5c0-7.4-5.5-13.5-12.3-13.5S19.7 7.3 19.7 14.7v5h-6.8c-3.5 0-6.4 2.9-6.4 6.4v17.4c0 10.6 8.6 19.3 19.3 19.3h12.5c10.6 0 19.3-8.6 19.3-19.1V26.1c-.1-3.5-3-6.4-6.5-6.4zm-27.9-5c0-5.5 3.9-10 8.8-10s8.8 4.5 8.8 10v4.9H23.2v-4.9zM54 43.6c0 8.6-7.1 15.6-15.8 15.6H25.8c-8.7 0-15.8-7.1-15.8-15.8V26.1c0-1.6 1.3-2.9 2.9-2.9h38.2c1.6 0 2.9 1.3 2.9 2.9v17.5z"/>
		<path d="M36.3 40.8h-8.5c-1.5 0-2.8 1.2-2.8 2.8v8.5c0 1.5 1.2 2.8 2.8 2.8h8.5c1.5 0 2.8-1.2 2.8-2.8v-8.5c-.1-1.6-1.3-2.8-2.8-2.8zm-.8 10.5h-7v-7h7v7z"/>
	</g>
</svg>
	);
};

export default Lock;