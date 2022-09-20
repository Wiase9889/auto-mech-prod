import React from 'react';

function VolumeMute(props) {
	const title = props.title || "volume mute";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M62.2 5.4c-.7-.7-1.8-.7-2.5 0L47.6 17.6v-6.4c0-2-1-3.7-2.8-4.7-1.7-.9-3.7-.9-5.4.1l-14.6 9.2c-.3.2-.6.3-1 .3H6.6c-2.9 0-5.3 2.4-5.3 5.3V43c0 2.9 2.4 5.3 5.3 5.3h10.3l-7.8 7.8c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5L62.2 7.9c.7-.7.7-1.8 0-2.5zm-42 39.4H6.6c-1 0-1.8-.8-1.8-1.8V21.5c0-1 .8-1.8 1.8-1.8h17.3c1 0 2-.3 2.8-.8l14.6-9.2c.8-.5 1.6-.2 1.8-.1.3.2.9.6.9 1.6V21L20.4 44.8h-.2z"/>
		<path d="M45.9 33.9c-1 0-1.8.8-1.8 1.8v17.6c0 1-.7 1.5-.9 1.6-.3.2-1 .5-1.8-.1l-9.6-6c-.8-.5-1.9-.3-2.4.6-.5.8-.3 1.9.6 2.4l9.6 6c.9.5 1.8.8 2.8.8.9 0 1.8-.2 2.6-.7 1.7-1 2.8-2.7 2.8-4.7V35.6c-.2-.9-1-1.7-1.9-1.7z"/>
	</g>
</svg>
	);
};

export default VolumeMute;