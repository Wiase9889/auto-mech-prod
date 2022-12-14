import React from 'react';

function Notepad(props) {
	const title = props.title || "notepad";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M51.8 3.4c-1.4-1.4-3.3-2.2-5.3-2.2H20.3c-2.8 0-5 2.2-5 5v5.5h-3.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.5v15h-3.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.5v15h-3.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.5V58c0 2.8 2.2 5 5 5h26.3c4.1 0 7.4-3.3 7.4-7.4V9c0-2.3-.8-4.2-2.2-5.6zm-1.3 51.9c0 2.2-1.8 3.9-3.9 3.9H20.3c-.8 0-1.5-.7-1.5-1.5v-5.5H25c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.2v-15H25c1 0 1.8-.8 1.8-1.8S26 30 25 30h-6.2V15H25c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.2V6.3c0-.8.7-1.5 1.5-1.5h26.3c1 0 2 .4 2.8 1.2.7.7 1.1 1.7 1.1 2.8v46.5z"/>
	</g>
</svg>
	);
};

export default Notepad;