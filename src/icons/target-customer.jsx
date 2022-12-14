import React from 'react';

function TargetCustomer(props) {
	const title = props.title || "target customer";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61 30.3h-6.6c-.9-11-9.7-19.7-20.6-20.6V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v6.7c-10.9.9-19.7 9.6-20.6 20.6H3c-1 0-1.8.8-1.8 1.8S2 33.9 3 33.9h6.6c.8 11.1 9.6 20 20.6 20.9V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.4c11-.9 19.8-9.8 20.6-20.9H61c1 0 1.8-.8 1.8-1.8 0-.9-.8-1.6-1.8-1.6zM33.8 51.1v-.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v.7c-9.1-.8-16.3-8.2-17.1-17.4h3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3c.9-9 8.1-16.2 17.1-17.1v.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V13c9 .8 16.2 8 17.1 17.1h-.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.4c-.8 9.2-8 16.6-17.1 17.4z"/>
		<path d="M37.3 36.5c1.6-1.4 2.6-3.5 2.6-5.8 0-4.4-3.5-7.9-7.9-7.9s-7.9 3.5-7.9 7.9c0 2.3 1 4.4 2.6 5.8-1.9.7-3.6 1.7-5.1 3-.7.6-.8 1.7-.1 2.5.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.4 2.3-2 5.1-3.1 8.1-3.1s5.9 1.1 8.1 3.1c.7.6 1.8.6 2.5-.1.6-.7.6-1.8-.1-2.5-1.7-1.4-3.4-2.4-5.3-3.1zM32 26.3c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.5 2-4.4 4.4-4.4z"/>
	</g>
</svg>
	);
};

export default TargetCustomer;