import React from 'react';

function Euro(props) {
	const title = props.title || "euro";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M49.8 59.3c-11.4 0-21.4-7.4-25.4-17.6h16.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H23.3c-.5-2-.7-4-.7-6.2 0-1.2.1-2.4.2-3.5h17.8c1 0 1.8-.8 1.8-1.8s-.9-1.6-1.8-1.6H23.5C26.7 13.5 37.4 4.8 49.8 4.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8C35.5 1.3 23.2 11.6 19.9 25h-5.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.1c-.2 1-.3 2.2-.3 3.4 0 2.1.2 4.2.7 6.2h-5.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.5c4.2 12.1 15.8 21.1 29.1 21.1 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Euro;