import React from 'react';

function Ux(props) {
	const title = props.title || "ux";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M48.7 38.2c1.7 0 3.1-1.4 3.1-3.1v-7.6c0-1.7-1.4-3.1-3.1-3.1H41c-1.7 0-3.1 1.4-3.1 3.1v2.1H26v-2.1c0-1.7-1.4-3.1-3.1-3.1h-2.1V15H23c1.7 0 3.1-1.4 3.1-3.1V4.3c0-1.7-1.4-3.1-3.1-3.1h-7.6c-1.7 0-3.1 1.4-3.1 3.1V12c0 1.7 1.4 3.1 3.1 3.1h2.1v9.4h-2.1c-1.7 0-3.1 1.4-3.1 3.1v7.6c0 1.7 1.4 3.1 3.1 3.1H23c1.7 0 3.1-1.4 3.1-3.1V33H38v2.1c0 1.7 1.4 3.1 3.1 3.1h2.1V49H41c-1.7 0-3 1.3-3 3v7.6c0 1.7 1.4 3.1 3.1 3.1h7.6c1.7 0 3.1-1.4 3.1-3.1V52c0-1.7-1.4-3.1-3.1-3.1h-2.1V38.2h2.1zm-33-33.4h6.8v6.8h-6.8V4.8zm6.8 29.9h-6.8v-6.8h6.8v6.8zm25.8 24.6h-6.8v-6.8h6.8v6.8zm-6.8-31.4h6.8v6.8h-6.8v-6.8z"/>
	</g>
</svg>
	);
};

export default Ux;