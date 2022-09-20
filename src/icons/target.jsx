import React from 'react';

function Target(props) {
	const title = props.title || "target";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61 30.3h-6.6c-.8-11.4-9.6-20.5-20.6-21.4V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v5.9c-11 .9-19.8 10-20.6 21.4H3c-1 0-1.8.8-1.8 1.8S2 33.9 3 33.9h6.6c.8 11.4 9.6 20.5 20.6 21.4V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.9c11-.9 19.8-10 20.6-21.4H61c1 0 1.8-.8 1.8-1.8 0-.9-.8-1.6-1.8-1.6zm-10.1 0h-7.5c-.7-5.1-4.6-9.1-9.6-9.9v-7.9c9 .8 16.3 8.3 17.1 17.8zM32 40.3c-4.4 0-8-3.7-8-8.3 0-4.6 3.6-8.3 7.9-8.3 4.4 0 7.9 3.7 7.9 8.3.2 4.6-3.4 8.3-7.8 8.3zm-1.7-27.9v7.9c-4.9.8-8.8 4.8-9.6 9.9h-7.5c.7-9.4 8-16.9 17.1-17.8zM13.1 33.8h7.5c.7 5.1 4.6 9.1 9.6 9.9v7.9c-9-.9-16.3-8.4-17.1-17.8zm20.7 17.8v-7.9c4.9-.8 8.8-4.8 9.6-9.9h7.5c-.8 9.4-8.1 16.9-17.1 17.8z"/>
	</g>
</svg>
	);
};

export default Target;