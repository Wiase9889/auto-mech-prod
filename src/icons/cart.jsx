import React from 'react';

function Cart(props) {
	const title = props.title || "cart";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M40.9 48.2c-3.9 0-7.1 3.3-7.1 7.3s3.2 7.3 7.1 7.3 7.1-3.3 7.1-7.3c.1-4-3.1-7.3-7.1-7.3zm0 11.1c-2 0-3.6-1.7-3.6-3.8 0-2.1 1.6-3.8 3.6-3.8s3.6 1.7 3.6 3.8c.1 2.1-1.6 3.8-3.6 3.8z"/>
		<path d="M18.2 48.2c-3.9 0-7.1 3.3-7.1 7.3s3.2 7.3 7.1 7.3 7.1-3.3 7.1-7.3c.1-4-3.1-7.3-7.1-7.3zm0 11.1c-2 0-3.6-1.7-3.6-3.8 0-2.1 1.6-3.8 3.6-3.8s3.6 1.7 3.6 3.8c.1 2.1-1.6 3.8-3.6 3.8z"/>
		<path d="M57.8 1.3h-6.4c-1.5 0-2.8 1.1-3 2.6l-1.8 13.2H7.3c-.9 0-1.7.4-2.2 1.1-.5.7-.7 1.6-.5 2.4v.1l6.1 18.9c.3 1.2 1.4 2.1 2.8 2.1H43c2.2 0 4-1.6 4.3-3.8l4.6-33.2h6c1 0 1.8-.8 1.8-1.8s-.9-1.6-1.9-1.6zM43.7 37.4c-.1.4-.4.8-.9.8h-29L8.1 20.6H46l-2.3 16.8z"/>
	</g>
</svg>
	);
};

export default Cart;