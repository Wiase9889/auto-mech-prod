import React from 'react';

function SpinnerArrow(props) {
	const title = props.title || "spinner arrow";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M59.3 25.8c-.3-.9-1.3-1.4-2.2-1.1-.9.3-1.4 1.3-1.1 2.2.8 2.4 1.1 4.9 1.1 7.5 0 3.8-.8 7.5-2.5 10.9-4.2 8.6-12.9 14-22.6 14-13.9 0-25.1-11.2-25.1-24.9 0-13.8 11.2-25 25.1-25 3.5 0 6.9.7 10.1 2.1h-6.2c-1 0-1.8.8-1.8 1.8S35 15 35.9 15h10.3c1 0 1.8-.8 1.8-1.8V3c0-1-.8-1.8-1.8-1.8S44.5 2 44.5 3v5.7C40.6 6.8 36.4 5.9 32 5.9 16.2 5.9 3.4 18.6 3.4 34.3S16.2 62.8 32 62.8c10.9 0 21-6.3 25.8-16 1.9-3.9 2.9-8.1 2.9-12.4-.1-3-.5-5.9-1.4-8.6z"/>
	</g>
</svg>
	);
};

export default SpinnerArrow;