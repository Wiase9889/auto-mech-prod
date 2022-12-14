import React from 'react';

function Unlock(props) {
	const title = props.title || "unlock";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M51 19.7h-7.5l.7-3.1C45.7 9.7 41.4 3 34.6 1.5c-3.3-.7-6.7-.1-9.5 1.7s-4.8 4.7-5.4 7.9c-.2.9.4 1.9 1.4 2.1.9.2 1.9-.4 2.1-1.4a8.9 8.9 0 0 1 3.9-5.7c2-1.3 4.5-1.8 6.8-1.3 4.9 1 8 5.9 6.9 10.9l-.8 4H13c-3.6 0-6.6 2.8-6.6 6.3v18c0 10.4 8.9 18.8 19.9 18.8h11.4c11 0 19.9-8.6 19.9-19.1V26c0-3.5-3-6.3-6.6-6.3zm3.1 23.9c0 8.6-7.3 15.6-16.4 15.6H26.3c-9 0-16.4-6.9-16.4-15.3V26c0-1.5 1.4-2.8 3.1-2.8h38c1.7 0 3 1.2 3 2.8v17.6z"/>
		<path d="M36.3 40.8h-8.6c-1.5 0-2.8 1.2-2.8 2.8v8.5c0 1.5 1.2 2.8 2.8 2.8h8.6c1.5 0 2.8-1.2 2.8-2.8v-8.5c-.1-1.6-1.3-2.8-2.8-2.8zm-.8 10.5h-7.1v-7h7.1v7z"/>
	</g>
</svg>
	);
};

export default Unlock;