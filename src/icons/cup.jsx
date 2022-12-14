import React from 'react';

function Cup(props) {
	const title = props.title || "cup";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M57.5 9.2H46.9V3.9c0-1.4-1.2-2.6-2.6-2.6H19.7c-1.4 0-2.6 1.2-2.6 2.6v5.3H6.5c-1.5 0-2.6 1.1-2.6 2.6v.9c0 7.5 5.8 13.8 13.2 14.6v.7c0 7.6 5.8 13.8 13.2 14.7v16.5h-8.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h21.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-8.8V42.7c3.4-.4 6.6-1.9 9-4.3C45.6 35.6 47 31.9 47 28v-.8c7.4-.9 13.2-7.1 13.2-14.6v-.9c-.1-1.4-1.2-2.5-2.7-2.5zM7.4 12.7h9.7v11.1c-5.5-.9-9.7-5.6-9.7-11.1zm36 15.4c0 3-1.1 5.8-3.2 7.9-2.2 2.2-5.1 3.4-8.2 3.4-6.3 0-11.4-5.1-11.4-11.3V4.8h22.9v23.3zm3.5-4.4v-11h9.7c0 5.5-4.2 10.2-9.7 11z"/>
	</g>
</svg>
	);
};

export default Cup;