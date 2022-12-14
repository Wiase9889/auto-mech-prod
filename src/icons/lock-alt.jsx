import React from 'react';

function LockAlt(props) {
	const title = props.title || "lock alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M46.9 19.9v-3.2c0-8-6-14.7-13.6-15.4-4.2-.4-8.4 1.1-11.5 3.9C18.8 8 17 11.9 17 16v3.8c-6 .9-10.5 6.1-10.5 12.3V51c0 6.5 5.3 11.8 11.8 11.8h27.3c6.5 0 11.8-5.3 11.8-11.8V32c.1-6.1-4.5-11.1-10.5-12.1zM24.2 7.8c2.4-2.2 5.5-3.3 8.8-3 5.8.5 10.4 5.7 10.4 11.9v3H20.6V16c0-3.1 1.3-6.1 3.6-8.2zM54 50.9c0 4.6-3.7 8.3-8.3 8.3H18.3c-4.6 0-8.3-3.7-8.3-8.3V32.2c0-4.9 4-9 9-9h25.9c5 0 9.1 3.9 9.1 8.8v18.9z"/>
		<path d="M32 35.5c-1 0-1.8.8-1.8 1.8v10.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V37.3c0-1-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default LockAlt;