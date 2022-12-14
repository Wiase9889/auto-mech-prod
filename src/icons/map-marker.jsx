import React from 'react';

function MapMarker(props) {
	const title = props.title || "map marker";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 1.3c-13.9 0-25.3 11-25.3 24.4 0 10.7 15.3 28.4 21.9 35.6.9 1 2.1 1.5 3.4 1.5 1.3 0 2.5-.5 3.4-1.5 6.6-7.1 21.9-24.9 21.9-35.6C57.3 12.2 45.9 1.3 32 1.3zm.8 57.6c-.5.5-1.2.5-1.6 0-4.9-5.3-21-23.5-21-33.2C10.2 14.1 20 4.8 32 4.8s21.8 9.4 21.8 20.9c0 9.7-16.1 27.8-21 33.2z"/>
		<path d="M32 15.7c-5.9 0-10.8 4.8-10.8 10.8 0 5.9 4.8 10.8 10.8 10.8s10.8-4.8 10.8-10.8c0-6-4.9-10.8-10.8-10.8zm0 18c-4 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3 7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"/>
	</g>
</svg>
	);
};

export default MapMarker;