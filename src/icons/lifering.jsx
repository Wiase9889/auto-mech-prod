import React from 'react';

function Lifering(props) {
	const title = props.title || "lifering";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 62.7c-7.9 0-15.7-3-21.7-9-5.8-5.8-9-13.5-9-21.7s3.2-15.9 9-21.7c5.8-5.8 13.5-9 21.7-9s15.9 3.2 21.7 9c12 12 12 31.5 0 43.5-6 5.9-13.8 8.9-21.7 8.9zm-12.2-6.3c3.7 1.9 7.9 2.8 12.2 2.8s8.4-1 12.2-2.8L32 44.2 19.8 56.4zM9.4 47.3c1 1.4 2.1 2.8 3.3 4 1.2 1.2 2.6 2.3 4 3.3L29 42.3c-1.7-.5-3.3-1.4-4.6-2.7s-2.2-2.9-2.7-4.6L9.4 47.3zm25.6-5l12.3 12.3c1.4-1 2.8-2.1 4-3.3 1.2-1.2 2.3-2.6 3.3-4L42.3 35c-.5 1.7-1.4 3.3-2.7 4.6-1.3 1.3-2.9 2.2-4.6 2.7zM7.6 19.8C5.7 23.6 4.8 27.7 4.8 32c0 4.3 1 8.4 2.8 12.2L19.8 32 7.6 19.8zM44.2 32l12.2 12.2c1.9-3.7 2.8-7.9 2.8-12.2s-1-8.4-2.8-12.2L44.2 32zM32 24.8c-1.9 0-3.7.8-5.1 2.1s-2.1 3.2-2.1 5.1c0 1.9.8 3.7 2.1 5.1 1.4 1.4 3.2 2.1 5.1 2.1 1.9 0 3.7-.8 5.1-2.1s2.1-3.2 2.1-5.1c0-1.9-.8-3.7-2.1-5.1-1.4-1.4-3.2-2.1-5.1-2.1zm7.6-.4c1.3 1.3 2.2 2.9 2.7 4.6l12.3-12.3c-1-1.4-2.1-2.8-3.3-4-1.2-1.2-2.6-2.3-4-3.3L35 21.7c1.7.5 3.3 1.4 4.6 2.7zM9.4 16.7L21.7 29c.5-1.7 1.4-3.3 2.7-4.6 1.3-1.3 2.9-2.2 4.6-2.7L16.7 9.4c-1.4 1-2.8 2.1-4 3.3-1.2 1.3-2.3 2.6-3.3 4zm10.4-9.1L32 19.8 44.2 7.6C40.4 5.7 36.3 4.8 32 4.8c-4.3 0-8.4.9-12.2 2.8z"/>
	</g>
</svg>
	);
};

export default Lifering;