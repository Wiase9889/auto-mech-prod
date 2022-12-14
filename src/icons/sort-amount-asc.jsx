import React from 'react';

function SortAmountAsc(props) {
	const title = props.title || "sort amount asc";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M22.8 44l-7.5 7.5V8.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v43.3L4.2 44c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5L12.3 57c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10.5-10.5c.7-.7.7-1.8 0-2.5-.6-.6-1.7-.6-2.4 0z"/>
		<path d="M34.9 10l5.1-.1c1 0 1.7-.8 1.7-1.8s-.8-1.7-1.8-1.7l-5 .1c-1 0-1.7.8-1.7 1.8-.1 1 .7 1.7 1.7 1.7z"/>
		<path d="M34.9 25.8l13-.1c1 0 1.7-.8 1.7-1.8s-.8-1.7-1.8-1.7l-13 .1c-1 0-1.7.8-1.7 1.8s.8 1.7 1.8 1.7z"/>
		<path d="M34.9 41.7l18.2-.1c1 0 1.7-.8 1.7-1.8s-.8-1.7-1.8-1.7l-18.2.1c-1 0-1.7.8-1.7 1.8 0 .9.8 1.7 1.8 1.7z"/>
		<path d="M61 53.9l-26.1.1c-1 0-1.7.8-1.7 1.8s.8 1.7 1.8 1.7l26-.1c1 0 1.7-.8 1.7-1.8s-.7-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default SortAmountAsc;