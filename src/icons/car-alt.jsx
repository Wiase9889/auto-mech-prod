import React from 'react';

function CarAlt(props) {
	const title = props.title || "car alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M14.6 38h6.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M41.9 38h6.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.6c-1 0-1.8.8-1.8 1.8S41 38 41.9 38z"/>
		<path d="M61 21.6h-3.4l-5-12.7C52 7.2 50.3 6 48.5 6H15.1c-1.8 0-3.4 1.1-4.1 2.8L6 21.6H3c-1 0-1.8.8-1.8 1.8S2 25.1 3 25.1h1.4v17.8c0 2.6 2.1 4.7 4.6 4.7v5.6c0 2.6 2.1 4.8 4.8 4.8h4.4c2.6 0 4.8-2.1 4.8-4.8v-5.6h17.3v5.6c0 2.6 2.1 4.8 4.8 4.8h4.4c2.6 0 4.8-2.1 4.8-4.8v-5.6h.4c2.6 0 4.8-2.1 4.8-4.8V25.1H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM14.3 10.1c.1-.4.5-.6.8-.6h33.4c.4 0 .7.2.8.6l5.6 14.1H8.7l5.6-14.1zm5.1 43.2c0 .7-.6 1.3-1.3 1.3h-4.4c-.7 0-1.3-.6-1.3-1.3v-5.6h6.9v5.6zm31.2 0c0 .7-.6 1.3-1.3 1.3h-4.4c-.7 0-1.3-.6-1.3-1.3v-5.6h6.9v5.6zm5.2-10.4c0 .7-.6 1.3-1.3 1.3H9.1c-.7 0-1.3-.6-1.3-1.3V27.6h47.9v15.3z"/>
	</g>
</svg>
	);
};

export default CarAlt;