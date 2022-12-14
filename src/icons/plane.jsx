import React from 'react';

function Plane(props) {
	const title = props.title || "plane";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M37.2 62.8c-.8 0-1.5-.3-2.1-.9l-5.4-5.4c-1-1-1.1-2.5-.4-3.7l4.4-7.1-7.9-7.7-12.5 15.3c-.5.7-1.3 1.1-2.2 1.1-.8 0-1.7-.3-2.2-.9l-6.7-6.7c-1-1-1.1-2.6-.4-3.8l11.6-17.4L8.6 21c-3.4-3.4-3.3-8.9.1-12.3C10.3 7 12.5 6.1 14.8 6c2.4 0 4.6.9 6.2 2.5l4.7 4.8L43 1.8c1.2-.8 2.8-.6 3.8.4l6.7 6.7c.6.6.9 1.4.9 2.2 0 .8-.4 1.6-1.1 2.2L38 25.9l7.7 7.9 7.1-4.4c1.2-.7 2.7-.6 3.7.4l5.4 5.4c.7.7 1 1.6.8 2.5-.1.9-.7 1.8-1.5 2.2l-13.7 7.6-7.6 13.7c-.5.8-1.3 1.4-2.2 1.5-.2 0-.3.1-.5.1zm-4.7-8.5l4.6 4.7 7.8-14 14-7.8-4.6-4.7-7.1 4.5c-1.2.8-2.7.6-3.7-.4L35.1 28c-.6-.6-.9-1.4-.8-2.2 0-.8.5-1.6 1.1-2.2L50.7 11l-6-6-17.4 11.5c-1.2.8-2.8.6-3.8-.4l-5-5.1c-.9-.9-2.2-1.5-3.6-1.4-1.4 0-2.7.6-3.7 1.6-2.1 2.1-2.1 5.4-.1 7.4l5.1 5c1 1 1.2 2.6.4 3.8L4.9 44.7l6 6 12.6-15.3c.5-.7 1.3-1.1 2.2-1.1.8 0 1.7.3 2.2.8l8.5 8.4c1 1 1.2 2.5.4 3.7l-4.3 7.1z"/>
	</g>
</svg>
	);
};

export default Plane;