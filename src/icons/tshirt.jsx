import React from 'react';

function Tshirt(props) {
	const title = props.title || "tshirt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M60.1 5.1H41c-1.4 0-2.6 1-2.7 2.4-.4 2.9-3.1 5-6.3 5-3.3 0-6-2.2-6.3-5l-.1-.5c-.4-1.2-1.4-2-2.6-2H3.9C2.4 5 1.2 6.2 1.2 7.7L2.1 20c0 1.5 1.4 2.4 2.7 2.4h4.6L11 52.1c.2 3.9 3.4 6.9 7.2 6.9h27.4c3.9 0 7-3 7.2-6.9l1.6-29.7h4.8c1.5 0 2.6-1.1 2.7-2.4l.8-12.1v-.1c.1-1.6-1.1-2.7-2.6-2.7zm-1.6 13.8h-4.8c-1.3 0-2.8 1-2.8 2.5l-1.6 30.5c-.1 2-1.8 3.6-3.7 3.6H18.2c-2 0-3.6-1.6-3.7-3.6l-1.6-30.4c0-1.4-1.2-2.5-2.7-2.5H5.5L4.8 8.6h17.5c.9 4.2 5 7.4 9.7 7.4 4.7 0 8.8-3.1 9.7-7.4h17.5l-.7 10.3z"/>
	</g>
</svg>
	);
};

export default Tshirt;