import React from 'react';

function Caravan(props) {
	const title = props.title || "caravan";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M17.8 19.7h-5.9c-1.5 0-2.8 1.2-2.8 2.8v5.9c0 1.5 1.2 2.8 2.8 2.8h5.9c1.5 0 2.8-1.2 2.8-2.8v-5.9c0-1.6-1.3-2.8-2.8-2.8zm-.7 7.9h-4.4v-4.4h4.4v4.4z"/>
		<path d="M61 40.8h-6.2V26.7c0-.4-.1-.9-.4-1.3L46.7 13c-.4-.7-1.2-1.2-2.1-1.2h-41c-1.3 0-2.4 1.1-2.4 2.4v27.6c0 1.3 1.1 2.4 2.4 2.4h2.9c0 .3-.1.6-.1.9 0 3.9 3.2 7 7 7 3.9 0 7-3.2 7-7 0-.3 0-.6-.1-.9H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6zm-47.5 7.9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.5 3.5-3.5 3.5zm0-10.5c-2.2 0-4.2 1-5.5 2.6H4.8V15.3h39.4L51.3 27v13.8h-9.7V24.5c0-1.2-1-2.2-2.2-2.2h-7.1c-1.2 0-2.2 1-2.2 2.2v16.3H19c-1.3-1.6-3.2-2.6-5.5-2.6zm20.3 2.6v-15h4.4v15h-4.4z"/>
	</g>
</svg>
	);
};

export default Caravan;