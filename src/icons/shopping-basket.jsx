import React from 'react';

function ShoppingBasket(props) {
	const title = props.title || "shopping basket";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M57.3 19.7h-3L47.5 2.4c-.4-.9-1.4-1.3-2.3-1-.9.4-1.3 1.4-1 2.3l6.3 16.1H13.4l6.3-16.1c.4-.9-.1-1.9-1-2.3-.9-.4-1.9.1-2.3 1L9.6 19.7h-3c-1.5 0-2.8 1.2-2.8 2.8V31c0 1.5 1.2 2.8 2.8 2.8h.1l2.6 22.8c.4 3.5 3.4 6.2 7 6.2h31.2c3.6 0 6.6-2.7 7-6.2l2.6-22.8h.1c1.5 0 2.8-1.2 2.8-2.8v-8.5c.1-1.5-1.1-2.8-2.7-2.8zM7.4 23.2h49.2v7H7.4v-7zm43.7 32.9c-.2 1.8-1.7 3.1-3.5 3.1H16.4c-1.8 0-3.3-1.3-3.5-3.1l-2.6-22.4h43.4l-2.6 22.4z"/>
		<path d="M21.5 50.8c1 0 1.8-.8 1.8-1.8v-7.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V49c0 1 .8 1.8 1.8 1.8z"/>
		<path d="M42.5 50.8c1 0 1.8-.8 1.8-1.8v-7.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V49c.1 1 .9 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default ShoppingBasket;