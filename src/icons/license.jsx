import React from 'react';

function License(props) {
	const title = props.title || "license";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M17.4 35.2c3.6 0 6.6-3 6.6-6.6S21 22 17.4 22s-6.6 3-6.6 6.6 3 6.6 6.6 6.6zm0-9.7c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1z"/>
		<path d="M49 41.5H13.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H49c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M49 22.1h-9.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H49c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M49 31.8h-9.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H49c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M57 10.8H7c-3.2 0-5.8 2.6-5.8 5.8v30.8c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V16.6c0-3.2-2.6-5.8-5.8-5.8zm2.3 36.6c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V16.6c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v30.8z"/>
	</g>
</svg>
	);
};

export default License;