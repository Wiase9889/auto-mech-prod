import React from 'react';

function Alarm(props) {
	const title = props.title || "alarm";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M58.1 54.2L56 50.9c-.5-.7-.7-1.4-.7-2.2V27.2c0-5.9-2.5-11.5-7.1-15.6-3.9-3.5-9-5.6-14.4-6V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v2.5c-.4 0-.8.1-1.2.1C17.4 6.9 8.5 16.4 8.5 27.5v21.2c-.1.9-.3 1.6-.6 2.1l-2 3.4c-.5.9-.5 1.9 0 2.7.5.8 1.3 1.3 2.3 1.3h22V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.8h22c1 0 1.8-.5 2.3-1.3.5-.9.5-1.9 0-2.7zm-48.4.5l1.3-2.1c.5-1 .9-2.1 1-3.5V27.6c0-9.4 7.5-17.3 17.4-18.4 6.1-.7 12 1.2 16.4 5.1 3.9 3.5 6 8.1 6 13v21.6c0 1.4.4 2.8 1.2 4.1l1.2 1.9H9.7z"/>
	</g>
</svg>
	);
};

export default Alarm;