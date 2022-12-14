import React from 'react';

function SchoolBenchAlt(props) {
	const title = props.title || "school bench alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61 16.7c-1 0-1.8.8-1.8 1.8v8.8H42.5c-2.4 0-4.4 2-4.4 4.4V37c0 1.8 1.1 3.3 2.6 4v9.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.8h15v8.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V18.4c-.1-.9-.9-1.7-1.9-1.7zM41.7 31.6c0-.5.4-.9.9-.9h16.7v7H42.5c-.5 0-.9-.4-.9-.9v-5.2z"/>
		<path d="M30.6 18.9L6.5 12.3C5.3 12 4 12.2 3 13c-1.1.8-1.7 2.2-1.7 3.6v5.1c0 2 1.3 3.7 3.1 4.2l2.2.6v23.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.4l15 4.1v18.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V32.5h.1c.3.1.7.1 1.1.1.9 0 1.7-.3 2.4-.8 1.1-.8 1.7-2.2 1.7-3.6v-5.1c-.3-2-1.6-3.7-3.5-4.2zm-.3 9.4c0 .3-.1.6-.3.8-.1.1-.3.1-.4.1L5.3 22.5c-.3-.1-.5-.5-.5-.9v-5.1c0-.3.1-.6.3-.8.1-.1.3-.1.4-.1l24.2 6.6c.3.1.5.5.5.9v5.2z"/>
	</g>
</svg>
	);
};

export default SchoolBenchAlt;