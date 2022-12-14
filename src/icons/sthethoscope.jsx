import React from 'react';

function Sthethoscope(props) {
	const title = props.title || "sthethoscope";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M56.2 1.3h-6.6c-1 0-1.8.8-1.8 1.8v2.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-.9h4.4v18.6c0 6.7-5.5 12.2-12.2 12.2h-1.1c-6.7 0-12.2-5.5-12.2-12.2V4.8h4.4v.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V3c0-1-.8-1.8-1.8-1.8h-6.6c-1.7 0-3.1 1.4-3.1 3.1v19c0 8.6 7 15.7 15.7 15.7h.1v13.6c0 3.6-2.8 6.6-6.2 6.6H21.1c-3.6 0-6.6-3-6.6-6.6v-9c3.7-.8 6.5-4 6.5-8 0-4.5-3.6-8.1-8.1-8.1s-8.1 3.6-8.1 8.1c0 3.8 2.7 7.1 6.3 7.9v9c0 5.6 4.5 10.1 10.1 10.1h15.3c5.4 0 9.7-4.5 9.7-10.1V38.8c7.5-1.2 13.2-7.7 13.2-15.5v-19c-.1-1.7-1.5-3-3.2-3zm-48 34.4c0-2.6 2.1-4.6 4.6-4.6s4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6-4.6-2-4.6-4.6z"/>
	</g>
</svg>
	);
};

export default Sthethoscope;