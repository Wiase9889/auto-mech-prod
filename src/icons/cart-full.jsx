import React from 'react';

function CartFull(props) {
	const title = props.title || "cart full";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M37.1 48.2c-4 0-7.2 3.3-7.2 7.3s3.2 7.3 7.2 7.3 7.2-3.3 7.2-7.3-3.2-7.3-7.2-7.3zm0 11.1c-2.1 0-3.7-1.7-3.7-3.8s1.7-3.8 3.7-3.8c2.1 0 3.7 1.7 3.7 3.8s-1.6 3.8-3.7 3.8z"/>
		<path d="M17.9 48.2c-4 0-7.2 3.3-7.2 7.3s3.2 7.3 7.2 7.3 7.2-3.3 7.2-7.3-3.2-7.3-7.2-7.3zm0 11.1c-2.1 0-3.7-1.7-3.7-3.8s1.7-3.8 3.7-3.8c2.1 0 3.7 1.7 3.7 3.8s-1.6 3.8-3.7 3.8z"/>
		<path d="M58.4 1.3H53c-2.2 0-4.1 1.6-4.4 3.8l-1.7 12.1h-5.2v-8c0-1.5-1.2-2.7-2.7-2.7h-7.9C31 5 29.9 3.9 28.5 3.9h-8.7c-1.5 0-2.7 1.3-2.7 2.9v2.4H9.2c-1.5 0-2.7 1.1-2.7 2.6v5.4c-.8.1-1.6.4-2.1 1.1-.5.7-.7 1.6-.5 2.4v.1l6.2 18.9c.3 1.2 1.5 2.1 2.8 2.1h27.9c3.5 0 6.5-2.6 7-6.1l4.3-30.1c.1-.4.4-.8.9-.8h5.4c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM38.2 17.1h-7.1V10h7.1v7.1zM20.6 7.4h7.1V17.1h-7.1V7.4zM10 12.7h7.1v4.4H10v-4.4zm34.3 22.5c-.2 1.7-1.8 3.1-3.5 3.1H13.4L7.6 20.6H46.5l-2.2 14.6z"/>
	</g>
</svg>
	);
};

export default CartFull;