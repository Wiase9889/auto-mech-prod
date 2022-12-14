import React from 'react';

function VolumeLow(props) {
	const title = props.title || "volume low";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M48 26c-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8-.1 2.5 1.9 1.9 1.9 5.1 0 7.1-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5 3.2-3.3 3.2-8.7 0-12z"/>
		<path d="M38.2 17.5c-1.2-.6-2.6-.6-3.7.1l-7.9 4.9h-9.3c-2 0-3.7 1.6-3.7 3.7v11.5c0 2 1.6 3.7 3.7 3.7h9.4l7.8 4.9c.6.4 1.3.6 1.9.6.6 0 1.2-.2 1.8-.5 1.2-.6 1.9-1.9 1.9-3.2V20.7c0-1.3-.7-2.5-1.9-3.2zm-1.6 25.8s0 .1-.1.2h-.2l-7.8-4.9c-.6-.4-1.3-.6-1.9-.6h-9.3c-.1 0-.2-.1-.2-.2V26.2c0-.1.1-.2.2-.2h9.3c.7 0 1.4-.2 1.9-.6l7.8-4.9h.2c.1.1.1.1.1.2v22.6z"/>
	</g>
</svg>
	);
};

export default VolumeLow;