import React from 'react';

function SortAlphaAsc(props) {
	const title = props.title || "sort alpha asc";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M29.4 49.2l-7.6 7.5V3c0-1-.8-1.8-1.8-1.8S18.4 2 18.4 3v53.8l-7.6-7.5c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l10.6 10.5c.3.3.8.5 1.2.5s.9-.2 1.2-.5l10.6-10.5c.7-.7.7-1.8 0-2.5-.7-.8-1.8-.8-2.5-.1z"/>
		<path d="M54.4 59.3h-5.3l5.6-7.6c.4-.5.4-1.2.1-1.8-.3-.6-.9-1-1.6-1h-8.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.6L44.3 60c-.4.5-.4 1.2-.1 1.8.3.6.9 1 1.6 1h8.7c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.9-1.7z"/>
		<path d="M43.9 15.3H52l.8 1.7c.3.6.9 1 1.6 1 .3 0 .5-.1.8-.2.9-.4 1.2-1.5.8-2.3L49.4 2.2c-.3-.6-.9-1-1.6-1s-1.3.4-1.6 1l-6.6 13.2c-.4.9-.1 1.9.8 2.3.9.4 1.9.1 2.3-.8l.8-1.7c.2.1.3.1.4.1zm3.9-8.4l2.5 4.9h-4.9l2.4-4.9z"/>
	</g>
</svg>
	);
};

export default SortAlphaAsc;