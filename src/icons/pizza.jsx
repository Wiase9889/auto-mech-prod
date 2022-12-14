import React from 'react';

function Pizza(props) {
	const title = props.title || "pizza";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M62.5 36.6c-2.2-7-7.2-14.6-13.9-21.3C42 8.6 34.4 3.7 27.4 1.5c-2.5-.8-5.3.5-6.2 3L1.6 56c-.7 1.9-.3 3.9 1.1 5.3 1 1 2.2 1.5 3.5 1.5.6 0 1.2-.1 1.8-.3L38.1 51c.1 0 .1 0 .2-.1l3.6-1.4 17.5-6.7c2.6-.9 3.9-3.7 3.1-6.2zM6.8 59.1c-.8.3-1.4-.2-1.6-.3-.2-.2-.7-.7-.3-1.6l4.2-11c1 2.2 3.1 3.7 5.7 3.7 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2-.9 0-1.8.2-2.6.6L20 17.5c1.3.8 2.6 1.6 3.9 2.6-1.6 1.1-2.6 3-2.6 5 0 3.4 2.8 6.2 6.2 6.2 2.6 0 4.8-1.6 5.7-3.8C38 32 42.7 37.4 46.7 44l-2.4.9c0-3.4-2.8-6.2-6.2-6.2s-6.2 2.8-6.2 6.2c0 1.6.6 3 1.6 4.1L6.8 59.1zM12 43.7c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 1.5-1.2 2.7-2.7 2.7S12 45.2 12 43.7zm18.2-18.8v.2c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.4 1-2.5 2.4-2.7 1 .8 2 1.6 3 2.5zm7.2 22.6c-1.2-.3-2.1-1.4-2.1-2.6 0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 .6-.2 1.1-.5 1.5l-2.8 1.1zm20.9-8L50 42.7c-4.9-8.3-11-14.9-16.9-20-.1 0-.1-.1-.2-.1-1.4-1.2-2.8-2.3-4.2-3.3l-.1-.1c-2.6-1.9-5.1-3.6-7.4-5l3.2-8.5c.2-.6.8-1 1.4-1 .2 0 .3 0 .5.1 6.4 2 13.6 6.8 19.8 13 6.2 6.2 11 13.5 13 19.9.3.7-.1 1.5-.8 1.8z"/>
	</g>
</svg>
	);
};

export default Pizza;