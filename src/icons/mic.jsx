import React from 'react';

function Mic(props) {
	const title = props.title || "mic";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 43.8c3.2 0 6.2-1.2 8.4-3.5 2.2-2.2 3.4-5.1 3.3-8.2V13c0-6.5-5.3-11.7-11.7-11.7-6.5 0-11.7 5.3-11.7 11.7v19c-.1 6.5 5.2 11.8 11.7 11.8zM23.7 13c0-4.5 3.7-8.2 8.2-8.2 4.5 0 8.2 3.7 8.2 8.2v19.1c0 2.2-.8 4.2-2.3 5.8-1.6 1.6-3.7 2.5-5.9 2.5-4.5 0-8.2-3.7-8.2-8.2V13z"/>
		<path d="M52.7 31.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 9.5-7.7 17.2-17.3 17.2-9.5 0-17.2-7.7-17.2-17.2 0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 10.8 8.3 19.7 18.9 20.6v7.1h-7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h17.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-7v-7.1c10.9-.8 19.3-9.7 19.3-20.6z"/>
	</g>
</svg>
	);
};

export default Mic;