import React from 'react';

function Ambulance(props) {
	const title = props.title || "ambulance";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M58 9.5H25.6c-2.6 0-4.7 2.2-4.7 4.9v3.3h-4.7v-2.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.6H8.8c-1.3 0-2.4.8-2.8 2L1.4 32.5l-.4.9.8 1.1v11c0 1.7 1.4 3.2 3.2 3.2h1c.8 3.4 3.8 5.9 7.4 5.9s6.6-2.5 7.4-5.9h22.6c.8 3.4 3.8 5.9 7.4 5.9 3.6 0 6.6-2.5 7.4-5.9h2.2c1.4 0 2.5-1.1 2.5-2.5V14.5c-.1-2.7-2.3-5-4.9-5zM9.2 21.2H21v10.2H5.5l3.7-10.2zM13.4 51c-2.3 0-4.1-1.9-4.1-4.2 0-2.3 1.8-4.2 4.1-4.2s4.1 1.9 4.1 4.2c0 2.3-1.9 4.2-4.1 4.2zm0-11.9c-3.6 0-6.7 2.6-7.4 6h-.7V34.9H21v10.2h-.2c-.8-3.4-3.8-6-7.4-6zM50.7 51c-2.3 0-4.1-1.9-4.1-4.2 0-2.3 1.8-4.2 4.1-4.2s4.1 1.9 4.1 4.2c0 2.3-1.8 4.2-4.1 4.2zm8.6-5.9h-1.1c-.8-3.4-3.8-6-7.4-6-3.6 0-6.7 2.6-7.4 6H24.5V14.4c0-.8.5-1.4 1.2-1.4H58c.7 0 1.2.7 1.2 1.5v30.6z"/>
		<path d="M47.3 26h-3.7v-3.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V26h-3.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H40v3.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.7h3.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Ambulance;