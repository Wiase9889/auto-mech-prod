import React from 'react';

function Headphone(props) {
	const title = props.title || "headphone";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M53.9 17.9c-6-5.9-14-9-22.5-8.9-16.6.3-30.1 13.8-30.1 30.2v12C1.3 53.3 2.9 55 5 55h6.5c2.1 0 3.8-1.7 3.8-3.8V42c0-2.1-1.7-3.8-3.8-3.8H4.8c.5-14 12.3-25.5 26.7-25.7 7.6-.1 14.7 2.6 20 7.9 4.9 4.8 7.7 11.1 7.8 17.8h-6.7c-2.1 0-3.8 1.7-3.8 3.8v9.2c0 2.1 1.7 3.8 3.8 3.8H59c2.1 0 3.8-1.7 3.8-3.8V38.7c0-7.8-3.2-15.2-8.9-20.8zM5 41.7h6.5c.1 0 .3.1.3.3v9.2c0 .1-.1.3-.3.3H5c-.1 0-.3-.1-.3-.3V42c.1-.2.2-.3.3-.3zm54.3 9.5c0 .1-.1.3-.3.3h-6.5c-.1 0-.3-.1-.3-.3V42c0-.1.1-.3.3-.3H59c.1 0 .3.1.3.3v9.2z"/>
	</g>
</svg>
	);
};

export default Headphone;