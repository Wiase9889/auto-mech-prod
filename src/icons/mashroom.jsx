import React from 'react';

function Mashroom(props) {
	const title = props.title || "mashroom";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M54.5 14.8C50.1 6.4 41.5 1.3 32 1.3S13.9 6.4 9.5 14.8c-1.8 3.5-2.8 7-2.9 10.8V25.9c0 .3.1.5.2.7C9 31.5 15.3 35.3 23.2 37l-1.7 16.2c-.3 2.4.5 4.9 2.2 6.7 1.6 1.8 4 2.9 6.4 2.9H34c2.5 0 4.8-1 6.5-2.9 1.6-1.8 2.4-4.3 2.2-6.7L41 37c7.9-1.7 14.2-5.4 16.4-10.3.1-.2.2-.5.2-.8-.3-4-1.3-7.7-3.1-11.1zM39.1 53.5c.2 1.5-.3 2.9-1.3 4s-2.4 1.7-3.9 1.7H30c-1.5 0-2.8-.6-3.8-1.7s-1.4-2.5-1.3-4l1.7-16c1.7.2 3.5.3 5.3.3 1.8 0 3.7-.1 5.4-.3l1.8 16zM32 34.4c-10.2 0-19.3-3.7-21.9-8.9.1-3.1.9-6.1 2.5-9.1C16.4 9.2 23.8 4.8 32 4.8s15.6 4.5 19.4 11.7c1.5 2.8 2.3 5.9 2.5 9.1-2.6 5.1-11.8 8.8-21.9 8.8z"/>
		<path d="M21.5 21.4c-1.5 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6c1.5 0 2.6-1.2 2.6-2.6s-1.1-2.6-2.6-2.6z"/>
		<circle cx="42.6" cy="24.1" r="2.6"/>
		<circle cx="32.1" cy="13.5" r="2.6"/>
	</g>
</svg>
	);
};

export default Mashroom;