import React from 'react';

function Coin(props) {
	const title = props.title || "coin";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M36 30.3h-7.4c-2.5 0-4.6-1.9-4.6-4.3s2-4.3 4.6-4.3h10.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.5V15c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.1h-1.7c-4.4 0-8.1 3.5-8.1 7.8s3.6 7.8 8.1 7.8H36c2.5 0 4.6 1.9 4.6 4.3s-2 4.3-4.6 4.3H24.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.5V49c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.1H36c4.4 0 8.1-3.5 8.1-7.8-.1-4.4-3.7-7.8-8.1-7.8z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default Coin;