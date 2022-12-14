import React from 'react';

function Bitcoin(props) {
	const title = props.title || "bitcoin";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M47.7 31.9c4.4-2.3 7.4-6.8 7.6-11.8v-1c-.3-8-7.2-14.5-15.6-14.5h-4.4V2c0-1-.8-1.8-1.8-1.8S31.7 1 31.7 2v2.5h-5.5V2c0-1-.8-1.8-1.8-1.8S22.9 1 22.9 2v2.5H10.4c-1 0-1.8.8-1.8 1.8S9.4 8 10.4 8H13v47.6h-2.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H23V62c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.8h5.5V62c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.8H40c8.3 0 15.3-6.5 15.6-14.5v-1.1c-.5-5-3.5-9.4-7.9-11.7zM16.5 8h23.3c6.5 0 11.9 5 12.1 11.1v.8c-.2 5.6-5.1 10.2-11.1 10.2H16.5V8zm35.3 36.6c-.2 6.1-5.6 11.1-12.1 11.1H16.5v-22h24.3c5.9 0 10.8 4.5 11 10v.9z"/>
	</g>
</svg>
	);
};

export default Bitcoin;