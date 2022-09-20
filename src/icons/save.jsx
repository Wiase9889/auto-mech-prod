import React from 'react';

function Save(props) {
	const title = props.title || "save";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M59.2 11.2L49.2 2l-.2-.1c-.6-.4-1.3-.7-2-.7H11.2c-4 0-7.3 3.3-7.3 7.3v46.8c0 4 3.3 7.3 7.3 7.3H52.9c4 0 7.3-3.3 7.3-7.3V13.5c-.1-.9-.4-1.6-1-2.3zM40.8 4.8v7H17.9v-7h22.9zM20.6 59.3V39h22.9v20.2H20.6zm36-3.9c0 2.1-1.7 3.8-3.8 3.8h-5.9V38.6c0-1.7-1.4-3.1-3.1-3.1H20.1c-1.7 0-3.1 1.4-3.1 3.1v20.7h-5.9c-2.1 0-3.8-1.7-3.8-3.8V8.6c0-2.1 1.7-3.8 3.8-3.8h3.2v7.5c0 1.7 1.4 3.1 3.1 3.1h23.8c1.7 0 3.1-1.4 3.1-3.1V4.8h2.6l9.7 8.9v41.7z"/>
		<path d="M37.3 43.4H26.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.6c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M37.3 51.3H26.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.6c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Save;