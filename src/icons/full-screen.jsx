import React from 'react';

function FullScreen(props) {
	const title = props.title || "full screen";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61 20.6c1 0 1.8-.8 1.8-1.8v-13c0-2.5-2-4.5-4.5-4.5h-13c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h11.6L32 29.5 7.2 4.8h11.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-13c-1.2 0-2.2.4-3 1.2-.1.1-.2.1-.2.2-.1 0-.1.1-.2.2-.7.8-1.1 1.8-1.1 3v13c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7.2L29.5 32 4.8 56.8V45.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v13c0 2.5 2 4.5 4.5 4.5h13c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.2L32 34.5l24.8 24.8H45.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13c2.5 0 4.5-2 4.5-4.5v-13c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V57L34.5 32 59.3 7.2v11.6c0 1 .7 1.8 1.7 1.8z"/>
	</g>
</svg>
	);
};

export default FullScreen;