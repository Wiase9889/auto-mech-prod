import React from 'react';

function Road(props) {
	const title = props.title || "road";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M62.7 53.7L51.6 8.9c-.3-1.4-1.6-2.3-3-2.3H15.4c-1.4 0-2.6 1-3 2.3L1.3 53.7c-.2.9 0 1.9.6 2.6s1.5 1.2 2.4 1.2h55.4c.9 0 1.8-.4 2.4-1.2.6-.7.8-1.7.6-2.6zM32 47.3c-1 0-1.8.8-1.8 1.8V54H13l10.4-44h7c-.1.2-.1.4-.1.6v4.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.9c0-.2 0-.4-.1-.6h7L51 54H33.8v-4.9c0-1-.8-1.8-1.8-1.8zM15.7 10h4.1L9.4 54H4.9l10.8-44zm38.9 44L44.2 10h4l10.9 44h-4.5z"/>
		<path d="M32 30.1c1 0 1.8-.8 1.8-1.8v-4.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.9c.1 1 .8 1.8 1.8 1.8z"/>
		<path d="M33.8 36.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.9z"/>
	</g>
</svg>
	);
};

export default Road;