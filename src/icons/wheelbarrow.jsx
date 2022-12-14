import React from 'react';

function Wheelbarrow(props) {
	const title = props.title || "wheelbarrow";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M55.8 43.7c-1.1 0-2.1.3-3 .7l-2.6-3c4-2.2 7.1-5.8 8.7-10.4l1.9-5.7c.3-.9 1-2.8-.2-4.4-.8-1.1-2.1-1.6-4.1-1.6H17.2l-3.1-9.9c-.6-1.8-2.2-3-4.1-3H3c-1 0-1.8.8-1.8 1.8S2 9.9 3 9.9h7c.4 0 .7.2.8.6l3.4 10.9V54c0 1 .6 1.9 1.6 2.3.3.1.6.2.8.2.6 0 1.2-.2 1.7-.7l16.4-12.2h7.1c1.7 0 3.4-.3 5-.7l3.3 3.9c-.8 1.1-1.3 2.5-1.3 4 0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9s-3-7.1-6.8-7.1zm-38.1 8.2v-8.3h11.1l-11.1 8.3zm0-11.8V22.8h38.9c.7 0 1.1.1 1.2.2 0 .1 0 .5-.3 1.3L55.6 30c-2 6.1-7.6 10.1-13.8 10.1H17.7zm38.1 14c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4z"/>
	</g>
</svg>
	);
};

export default Wheelbarrow;