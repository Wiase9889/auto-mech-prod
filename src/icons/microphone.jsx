import React from 'react';

function Microphone(props) {
	const title = props.title || "microphone";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M44.6 1.3c-10 0-18.1 8.1-18.1 18.1 0 1.9.3 3.7.8 5.3L3.7 48.3c-1.6 1.6-2.5 3.7-2.5 6s.9 4.4 2.5 6c1.7 1.6 3.8 2.4 6 2.4s4.4-.8 6-2.4l23.5-23.5c1.7.5 3.5.8 5.3.8 10 0 18.1-8.1 18.1-18.1s-8-18.2-18-18.2zM6.2 57.8c-.9-.9-1.4-2.2-1.4-3.5s.5-2.6 1.4-3.5l.7-.7 7.1 7.1-.6.6c-2.1 1.9-5.3 1.9-7.2 0zm10.2-3.1l-7.1-7.1 19.4-19.4c1.7 3 4.1 5.4 7.1 7.1L16.4 54.7zM30 19.4c0-1.6.3-3.2.8-4.6l18.4 18.5c-1.4.5-2.9.7-4.5.7C36.5 34 30 27.5 30 19.4zm22.5 12.3L32.3 11.4c2.6-4 7.1-6.7 12.3-6.7 8.1 0 14.6 6.6 14.6 14.6.1 5.3-2.7 9.8-6.7 12.4z"/>
	</g>
</svg>
	);
};

export default Microphone;